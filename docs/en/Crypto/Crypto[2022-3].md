# Crypto[2022-3]
## PI-Cut-Choo and Friends: Compact Blind Signatures via Parallel Instance Cut-and-Choose and More.
🌍 **[English](../../../docs/en/Crypto/Crypto[2022-3].md#pi-cut-choo-and-friends-compact-blind-signatures-via-parallel-instance-cut-and-choose-and-more)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2022-3].md#pi-cut-choo-and-friends-compact-blind-signatures-via-parallel-instance-cut-and-choose-and-more)
### Authors
* Lucjan Hanzlik, CISPA Helmholtz Center for Information Security, Saarbrücken, Germany
* Julian Loss, CISPA Helmholtz Center for Information Security, Saarbrücken, Germany
* Benedikt Wagner, CISPA Helmholtz Center for Information Security, Saarbrücken, Germany
* Rutchathon Chairattana-Apirom, Brown University, Providence, RI, 02906, USA
* Anna Lysyanskaya, Brown University, Providence, RI, 02906, USA
### Abstract
> Blind signature schemes are one of the best-studied tools for privacy-preserving authentication. Unfortunately, known constructions of provably secure blind signatures either rely on non-standard hardness assumptions, or require parameters that grow linearly with the number of concurrently issued signatures, or involve prohibitively inefficient general techniques such as general secure two-party computation.
> 
> Recently, Katz, Loss and Rosenberg (ASIACRYPT’21) gave a technique that, for the security parameter n, transforms blind signature schemes secure for \(O(\log n)\) concurrent executions of the blind signing protocol into ones that are secure for any \(\textsf{poly}(n)\) concurrent executions.
> 
> This transform has two drawbacks that we eliminate in this paper: 1) the communication complexity of the resulting blind signing protocol grows linearly with the number of signing interactions; 2) the resulting schemes inherit a very loose security bound from the underlying scheme and, as a result, require impractical parameter sizes.
> 
> In this work, we give an improved transform for obtaining a secure blind signing protocol tolerating any \(\textsf{poly}(n)\) concurrent executions from one that is secure for \(O(\log n)\) concurrent executions. While preserving the advantages of the original transform, the communication complexity of our new transform only grows logarithmically with the number of interactions. Under the CDH and RSA assumptions, we improve on this generic transform in terms of concrete efficiency and give (1) a BLS-based blind signature scheme over a standard-sized group where signatures are of size roughly 3 KB and communication per signature is roughly 120 KB; and (2) an Okamoto-Guillou-Quisquater-based blind signature scheme with signatures and communication of roughly 9 KB and 8 KB, respectively.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-15982-4_1](https://doi.org/10.1007/978-3-031-15982-4_1)
## Augmented Random Oracles.
🌍 **[English](../../../docs/en/Crypto/Crypto[2022-3].md#augmented-random-oracles)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2022-3].md#augmented-random-oracles)
### Authors
* Mark Zhandry, NTT Research, Sunnyvale, USA
* Mark Zhandry, Princeton University, Princeton, USA
### Abstract
> We propose a new paradigm for justifying the security of random oracle-based protocols, which we call the Augmented Random Oracle Model (AROM). We show that the AROM captures a wide range of important random oracle impossibility results. Thus a proof in the AROM implies some resiliency to such impossibilities. We then consider three ROM transforms which are subject to impossibilities: Fiat-Shamir (FS), Fujisaki-Okamoto (FO), and Encrypt-with-Hash (EwH). We show in each case how to obtain security in the AROM by strengthening the building blocks or modifying the transform.
> 
> Along the way, we give a couple other results. We improve the assumptions needed for the FO and EwH impossibilities from indistinguishability obfuscation to circularly secure LWE; we argue that our AROM still captures this improved impossibility. We also demonstrate that there is no “best possible” hash function, by giving a pair of security properties, both of which can be instantiated in the standard model separately, which cannot be simultaneously satisfied by a single hash function.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-15982-4_2](https://doi.org/10.1007/978-3-031-15982-4_2)
## To Label, or Not To Label (in Generic Groups).
🌍 **[English](../../../docs/en/Crypto/Crypto[2022-3].md#to-label-or-not-to-label-in-generic-groups)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2022-3].md#to-label-or-not-to-label-in-generic-groups)
### Authors
* Mark Zhandry, NTT Research, Sunnyvale, USA
* Mark Zhandry, Princeton University, Princeton, USA
### Abstract
> Generic groups are an important tool for analyzing the feasibility and in-feasibility of group-based cryptosystems. There are two distinct wide-spread versions of generic groups, Shoup’s and Maurer’s, the main difference being whether or not group elements are given explicit labels. The two models are often treated as equivalent. In this work, however, we demonstrate that the models are in fact quite different, and care is needed when stating generic group results:
> 
> We show that numerous textbook constructions are not captured by Maurer, but are captured by Shoup. In the other direction, any construction captured by Maurer is captured by Shoup.
> 
> For constructions that exist in both models, we show that security is equivalent for “single stage” games, but Shoup security is strictly stronger than Maurer security for some “multi-stage” games.
> 
> The existing generic group un-instantiability results do not apply to Maurer. We fill this gap with a new un-instantiability result.
> 
> We explain how the known black box separations between generic groups and identity-based encryption do not fully apply to Shoup, and resolve this by providing such a separation.
> 
> We give a new un-instantiability result for the algebraic group model.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-15982-4_3](https://doi.org/10.1007/978-3-031-15982-4_3)
## Lower Bound on SNARGs in the Random Oracle Model.
🌍 **[English](../../../docs/en/Crypto/Crypto[2022-3].md#lower-bound-on-snargs-in-the-random-oracle-model)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2022-3].md#lower-bound-on-snargs-in-the-random-oracle-model)
### Authors
* Iftach Haitner, Tel-Aviv University, Tel Aviv, Israel
* Daniel Nukrai, Tel-Aviv University, Tel Aviv, Israel
* Eylon Yogev, Bar-Ilan University, Ramat Gan, Israel
### Abstract
> Succinct non-interactive arguments (SNARGs) have become a fundamental primitive in the cryptographic community. The focus of this work is constructions of SNARGs in the Random Oracle Model (ROM). Such SNARGs enjoy post-quantum security and can be deployed using lightweight cryptography to heuristically instantiate the random oracle. A ROM-SNARG is \((t,\varepsilon )\)-sound if no \(t\)-query malicious prover can convince the verifier to accept a false statement with probability larger than \(\varepsilon \). Recently, Chiesa-Yogev (CRYPTO ’21) presented a ROM-SNARG of length \({\varTheta }(\log (t/\varepsilon ) \cdot \log t)\) (ignoring \(\log n\) factors, for n being the instance size). This improvement, however, is still far from the (folklore) lower bound of \(\varOmega (\log (t/\varepsilon ))\).
> 
> Assuming the randomized exponential-time hypothesis, we prove a tight lower bound of \({\varOmega }(\log (t/\varepsilon ) \cdot \log t)\) for the length of \((t,\varepsilon )\)-sound ROM-SNARGs. Our lower bound holds for constructions with non-adaptive verifiers and strong soundness notion called salted soundness, restrictions that hold for all known constructions (ignoring contrived counterexamples). We prove our lower bound by transforming any short ROM-SNARG (of the considered family) into a same length ROM-SNARG in which the verifier asks only a few oracles queries, and then apply the recent lower bound of Chiesa-Yogev (TCC ’20) for such SNARGs.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-15982-4_4](https://doi.org/10.1007/978-3-031-15982-4_4)
## Time-Space Tradeoffs for Sponge Hashing: Attacks and Limitations for Short Collisions.
🌍 **[English](../../../docs/en/Crypto/Crypto[2022-3].md#time-space-tradeoffs-for-sponge-hashing-attacks-and-limitations-for-short-collisions)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2022-3].md#time-space-tradeoffs-for-sponge-hashing-attacks-and-limitations-for-short-collisions)
### Authors
* Cody Freitag, Cornell Tech, New York, USA
* Ashrujit Ghoshal, Paul G. Allen School of Computer Science & Engineering, University of Washington, Seattle, Washington, USA
* Ilan Komargodski, School of Computer Science and Engineering, Hebrew University of Jerusalem, 91904, Jerusalem, Israel
* Ilan Komargodski, NTT Research, Sunnyvale, USA
### Abstract
> Sponge hashing is a novel alternative to the popular Merkle-Damgård hashing design. The sponge construction has become increasingly popular in various applications, perhaps most notably, it underlies the SHA-3 hashing standard. Sponge hashing is parametrized by two numbers, r and c (bitrate and capacity, respectively), and by a fixed-size permutation on \(r+c\) bits. In this work, we study the collision resistance of sponge hashing instantiated with a random permutation by adversaries with arbitrary S-bit auxiliary advice input about the random permutation that make T online queries. Recent work by Coretti et al. (CRYPTO ’18) showed that such adversaries can find collisions (with respect to a random c-bit initialization vector) with advantage \(\varTheta (ST^2/2^c + T^2/ 2^{r})\).
> 
> Although the above attack formally breaks collision resistance in some range of parameters, its practical relevance is limited since the resulting collision is very long (on the order of T blocks). Focusing on the task of finding short collisions, we study the complexity of finding a B-block collision for a given parameter \(B\ge 1\). We give several new attacks and limitations. Most notably, we give a new attack that results in a single-block collision and has advantage
> 
> In certain range of parameters (e.g., \(ST^2>2^c\)), our attack outperforms the previously-known best attack. To the best of our knowledge, this is the first natural application for which sponge hashing is provably less secure than the corresponding instance of Merkle-Damgård hashing. Our attack relies on a novel connection between single-block collision finding in sponge hashing and the well-studied function inversion problem. We also give a general attack that works for any \(B\ge 2\) and has advantage \(\varOmega ({STB}/{2^{c}} + {T^2}/{2^{\min \{r,c\}}})\), adapting an idea of Akshima et al. (CRYPTO ’20).
> 
> We complement the above attacks with bounds on the best possible attacks. Specifically, we prove that there is a qualitative jump in the advantage of best possible attacks for finding unbounded-length collisions and those for finding very short collisions. Most notably, we prove (via a highly non-trivial compression argument) that the above attack is optimal for \(B=2\) in some range of parameters.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-15982-4_5](https://doi.org/10.1007/978-3-031-15982-4_5)
## On Time-Space Tradeoffs for Bounded-Length Collisions in Merkle-Damgård Hashing.
🌍 **[English](../../../docs/en/Crypto/Crypto[2022-3].md#on-time-space-tradeoffs-for-bounded-length-collisions-in-merkle-damg-rd-hashing)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2022-3].md#on-time-space-tradeoffs-for-bounded-length-collisions-in-merkle-damg-rd-hashing)
### Authors
* Ashrujit Ghoshal, Paul G. Allen School of Computer Science & Engineering, University of Washington, Seattle, WA, USA
* Ilan Komargodski, School of Computer Science and Engineering, Hebrew University of Jerusalem, 91904, Jerusalem, Israel
* Ilan Komargodski, NTT Research, Sunnyvale, USA
### Abstract
> We study the power of preprocessing adversaries in finding bounded-length collisions in the widely used Merkle-Damgård (MD) hashing in the random oracle model. Specifically, we consider adversaries with arbitrary S-bit advice about the random oracle and can make at most T queries to it. Our goal is to characterize the advantage of such adversaries in finding a B-block collision in an MD hash function constructed using the random oracle with range size N as the compression function (given a random salt).
> 
> The answer to this question is completely understood for very large values of B (essentially \(\varOmega (T)\)) as well as for \(B=1,2\). For \(B\approx T\), Coretti et al. (EUROCRYPT ’18) gave matching upper and lower bounds of \(\tilde{\varTheta }(ST^2/N)\). Akshima et al. (CRYPTO ’20) observed that the attack of Coretti et al. could be adapted to work for any value of \(B>1\), giving an attack with advantage \(\tilde{\varOmega }(STB/N + T^2/N)\). Unfortunately, they could only prove that this attack is optimal for \(B=2\). Their proof involves a compression argument with exhaustive case analysis and, as they claim, a naive attempt to generalize their bound to larger values of B (even for \(B=3\)) would lead to an explosion in the number of cases needed to be analyzed, making it unmanageable. With the lack of a more general upper bound, they formulated the STB conjecture, stating that the best-possible advantage is \(\tilde{O}(STB/N + T^2/N)\) for any \(B>1\).
> 
> In this work, we confirm the STB conjecture in many new parameter settings. For instance, in one result, we show that the conjecture holds for all constant values of B. Further, using combinatorial properties of graphs, we are able to confirm the conjecture even for super constant values of B, as long as some restriction is made on S. For instance, we confirm the conjecture for all \(B \leqslant T^{1/4}\) as long as \(S \leqslant T^{1/8}\). Technically, we develop structural characterizations for bounded-length collisions in MD hashing that allow us to give a compression argument in which the number of cases needed to be handled does not explode.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-15982-4_6](https://doi.org/10.1007/978-3-031-15982-4_6)
## Time-Space Lower Bounds for Finding Collisions in Merkle-Damgård Hash Functions.
🌍 **[English](../../../docs/en/Crypto/Crypto[2022-3].md#time-space-lower-bounds-for-finding-collisions-in-merkle-damg-rd-hash-functions)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2022-3].md#time-space-lower-bounds-for-finding-collisions-in-merkle-damg-rd-hash-functions)
### Authors
* Akshima, University of Chicago, Chicago, USA
* Siyao Guo, NYU Shanghai, Shanghai, China
* Qipeng Liu, Simons Institute for the Theory of Computing, Berkeley, USA
### Abstract
> We revisit the problem of finding B-block-long collisions in Merkle-Damgård Hash Functions in the auxiliary-input random oracle model, in which an attacker gets a piece of S-bit advice about the random oracle and makes T oracle queries.
> 
> Akshima, Cash, Drucker and Wee (CRYPTO 2020), based on the work of Coretti, Dodis, Guo and Steinberger (EUROCRYPT 2018), showed a simple attack for \(2\le B\le T\) (with respect to a random salt). The attack achieves advantage \(\widetilde{\varOmega }(STB/2^n+T^2/2^n)\) where n is the output length of the random oracle. They conjectured that this attack is optimal. However, this so-called STB conjecture was only proved for \(B\approx T\) and \(B=2\). Very recently, Ghoshal and Komargodski (CRYPTO 22) confirmed STB conjecture for all constant values of B, and provided an \(\widetilde{O}(S^4TB^2/2^n+T^2/2^n)\) bound for all choices of B.
> 
> In this work, we prove an \(\widetilde{O}((STB/2^n)\cdot \max \{1,ST^2/2^n\}+ T^2/2^n)\) bound for every \(2< B < T\). Our bound confirms the STB conjecture for \(ST^2\le 2^n\), and is optimal up to a factor of S for \(ST^2>2^n\) (note as \(T^2\) is always at most \(2^n\), otherwise finding a collision is trivial by the birthday attack). Our result subsumes all previous upper bounds for all ranges of parameters except for \(B=\widetilde{O}(1)\) and \(ST^2>2^n\).
> 
> We obtain our results by adopting and refining the technique of Chung, Guo, Liu, and Qian (FOCS 2020). Our approach yields more modular proofs and sheds light on how to bypass the limitations of prior techniques. Along the way, we obtain a considerably simpler and illuminating proof for \(B=2\), recovering the main result of Akshima, Cash, Drucker and Wee.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-15982-4_7](https://doi.org/10.1007/978-3-031-15982-4_7)
## Sustained Space and Cumulative Complexity Trade-Offs for Data-Dependent Memory-Hard Functions.
🌍 **[English](../../../docs/en/Crypto/Crypto[2022-3].md#sustained-space-and-cumulative-complexity-trade-offs-for-data-dependent-memory-hard-functions)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2022-3].md#sustained-space-and-cumulative-complexity-trade-offs-for-data-dependent-memory-hard-functions)
### Authors
* Jeremiah Blocki, Purdue University, West Lafayette, IN, 47906, USA
* Blake Holman, Purdue University, West Lafayette, IN, 47906, USA
### Abstract
> Memory-hard functions (MHFs) are a useful cryptographic primitive which can be used to design egalitarian proof of work puzzles and to protect low entropy secrets like passwords against brute-force attackers. Intuitively, a memory-hard function is a function whose evaluation costs are dominated by memory costs even if the attacker uses specialized hardware (FPGAs/ASICs), and several cost metrics have been proposed to quantify this intuition. For example, space-time cost looks at the product of running time and the maximum space usage over the entire execution of an algorithm. Alwen and Serbinenko (STOC 2015) observed that the space-time cost of evaluating a function multiple times may not scale linearly in the number of instances being evaluated and introduced the stricter requirement that a memory-hard function has high cumulative memory complexity (CMC) to ensure that an attacker’s amortized space-time costs remain large even if the attacker evaluates the function on multiple different inputs in parallel. Alwen et al. (EUROCRYPT 2018) observed that the notion of CMC still gives the attacker undesirable flexibility in selecting space-time tradeoffs e.g., while the MHF \(\texttt{Scrypt}\) has maximal CMC \(\varOmega (N^2)\), an attacker could evaluate the function with constant O(1) memory in time \(O(N^2)\). Alwen et al. introduced an even stricter notion of Sustained Space complexity and designed an MHF which has \(s=\varOmega (N/\log N)\) sustained complexity \(t=\varOmega (N)\) i.e., any algorithm evaluating the function in the parallel random oracle model must have at least \(t=\varOmega (N)\) steps where the memory usage is at least \(\varOmega (N/\log N)\). In this work, we use dynamic pebbling games and dynamic graphs to explore tradeoffs between sustained space complexity and cumulative memory complexity for data-dependent memory-hard functions such as Argon2id and \(\texttt{Scrypt}\). We design our own dynamic graph (dMHF) with the property that any dynamic pebbling strategy either (1) has \(\varOmega (N)\) rounds with \(\varOmega (N)\) space, or (2) has CMC \(\varOmega (N^{3-\epsilon })\)—substantially larger than \(N^2\). For Argon2id we show that any dynamic pebbling strategy either(1) has \(\varOmega (N)\) rounds with \(\varOmega (N^{1-\epsilon })\) space, or (2) has CMC \(\omega (N^2)\). We also present a dynamic version of DRSample (Alwen et al. 2017) for which any dynamic pebbling strategy either (1) has \(\varOmega (N)\) rounds with \(\varOmega (N/\log N)\) space, or (2) has CMC \(\varOmega (N^3/\log N)\).

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-15982-4_8](https://doi.org/10.1007/978-3-031-15982-4_8)
## Low Communication Complexity Protocols, Collision Resistant Hash Functions and Secret Key-Agreement Protocols.
🌍 **[English](../../../docs/en/Crypto/Crypto[2022-3].md#low-communication-complexity-protocols-collision-resistant-hash-functions-and-secret-key-agreement-protocols)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2022-3].md#low-communication-complexity-protocols-collision-resistant-hash-functions-and-secret-key-agreement-protocols)
### Authors
* Shahar P. Cohen, Department of Computer Science and Applied Mathematics, Weizmann Institute of Science, Rehovot, Israel
* Moni Naor, Department of Computer Science and Applied Mathematics, Weizmann Institute of Science, Rehovot, Israel
### Abstract
> We study communication complexity in computational settings where bad inputs may exist, but they should be hard to find for any computationally bounded adversary.
> 
> We define a model where there is a source of public randomness but the inputs are chosen by a computationally bounded adversarial participant after seeing the public randomness. We show that breaking the known communication lower bounds of the private coins model in this setting is closely connected to known cryptographic assumptions. We consider the simultaneous messages model and the interactive communication model and show that for any non trivial predicate (with no redundant rows, such as equality):
> 
> 1. Breaking the \( \varOmega (\sqrt{n}) \) bound in the simultaneous message case or the \( \varOmega (\log n) \) bound in the interactive communication case, implies the existence of distributional collision-resistant hash functions (dCRH). This is shown using techniques from Babai and Kimmel [BK97]. Note that with a CRH the lower bounds can be broken.
> 
> 2. There are no protocols of constant communication in this preset randomness settings (unlike the plain public randomness model).
> 
> The other model we study is that of a stateful “free talk”, where participants can communicate freely before the inputs are chosen and may maintain a state, and the communication complexity is measured only afterwards. We show that efficient protocols for equality in this model imply secret key-agreement protocols in a constructive manner. On the other hand, secret key-agreement protocols imply optimal (in terms of error) protocols for equality.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-15982-4_9](https://doi.org/10.1007/978-3-031-15982-4_9)
## Accelerating the Delfs-Galbraith Algorithm with Fast Subfield Root Detection.
🌍 **[English](../../../docs/en/Crypto/Crypto[2022-3].md#accelerating-the-delfs-galbraith-algorithm-with-fast-subfield-root-detection)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2022-3].md#accelerating-the-delfs-galbraith-algorithm-with-fast-subfield-root-detection)
### Authors
* Maria Corte-Real Santos, University College London, London, UK
* Craig Costello, Microsoft Research, Redmond, USA
* Jia Shi, University of Waterloo, Waterloo, Canada
### Abstract
> We give a new algorithm for finding an isogeny from a given supersingular elliptic curve \(E/\mathbb {F}_{p^2}\) to a subfield elliptic curve \(E'/\mathbb {F}_p\), which is the bottleneck step of the Delfs–Galbraith algorithm for the general supersingular isogeny problem. Our core ingredient is a novel method of rapidly determining whether a polynomial \(f \in L[X]\) has any roots in a subfield \(K \subset L\), while avoiding expensive root-finding algorithms. In the special case when \(f=\Upphi _{\ell ,p}(X,j) \in \mathbb {F}_{p^2}[X]\), i.e., when f is the \(\ell \)-th modular polynomial evaluated at a supersingular j-invariant, this provides a means of efficiently determining whether there is an \(\ell \)-isogeny connecting the corresponding elliptic curve to a subfield curve. Together with the traditional Delfs–Galbraith walk, inspecting many \(\ell \)-isogenous neighbours in this way allows us to search through a larger proportion of the supersingular set per unit of time. Though the asymptotic \(\tilde{O}(p^{1/2})\) complexity of our improved algorithm remains unchanged from that of the original Delfs–Galbraith algorithm, our theoretical analysis and practical implementation both show a significant reduction in the runtime of the subfield search. This sheds new light on the concrete hardness of the general supersingular isogeny problem (i.e. the foundational problem underlying isogeny-based cryptography), and has immediate implications on the bit-security of schemes like B-SIDH and SQISign for which Delfs–Galbraith is the best known classical attack.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-15982-4_10](https://doi.org/10.1007/978-3-031-15982-4_10)
## Secret Can Be Public: Low-Memory AEAD Mode for High-Order Masking.
🌍 **[English](../../../docs/en/Crypto/Crypto[2022-3].md#secret-can-be-public-low-memory-aead-mode-for-high-order-masking)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2022-3].md#secret-can-be-public-low-memory-aead-mode-for-high-order-masking)
### Authors
* Yusuke Naito, Mitsubishi Electric Corporation, Kanagawa, Japan
* Yu Sasaki, NTT Social Informatics Laboratories, Tokyo, Japan
* Takeshi Sugawara, The University of Electro-Communications, Tokyo, Japan
### Abstract
> We propose a new AEAD mode of operation for an efficient countermeasure against side-channel attacks. Our mode achieves the smallest memory with high-order masking, by minimizing the states that are duplicated in masking. An s-bit key-dependent state is necessary for achieving s-bit security, and the conventional schemes always protect the entire s bits with masking. We reduce the protected state size by introducing an unprotected state in the key-dependent state: we protect only a half and give another half to a side-channel adversary. Ensuring independence between the unprotected and protected states is the key technical challenge since mixing these states reveals the protected state to the adversary. We propose a new mode \(\textsf{HOMA}\) that achieves s-bit security using a tweakable block cipher with the s/2-bit block size. We also propose a new primitive for instantiating \(\textsf{HOMA}\) with \(s=128\) by extending the SKINNY tweakable block cipher to a 64-bit plaintext block, a 128-bit key, and a \((256+3)\)-bit tweak. We make hardware performance evaluation by implementing \(\textsf{HOMA}\) with high-order masking for \(d \le 5\). For any \(d > 0\), \(\textsf{HOMA}\) outperforms the current state-of-the-art \(\textsf{PFB}\_\textsf{Plus}\) by reducing the circuit area larger than that of the entire S-box.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-15982-4_11](https://doi.org/10.1007/978-3-031-15982-4_11)
## Partial Key Exposure Attacks on BIKE, Rainbow and NTRU.
🌍 **[English](../../../docs/en/Crypto/Crypto[2022-3].md#partial-key-exposure-attacks-on-bike-rainbow-and-ntru)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2022-3].md#partial-key-exposure-attacks-on-bike-rainbow-and-ntru)
### Authors
* Andre Esser, Technology Innovation Institute, Abu Dhabi, UAE
* Javier Verbel, Technology Innovation Institute, Abu Dhabi, UAE
* Alexander May, Ruhr University Bochum, Bochum, Germany
* Weiqiang Wen, LTCI, Telecom Paris, Institut Polytechnique de Paris, Palaiseau, France
### Abstract
> In a so-called partial key exposure attack one obtains some information about the secret key, e.g. via some side-channel leakage. This information might be a certain fraction of the secret key bits (erasure model) or some erroneous version of the secret key (error model). The goal is to recover the secret key from the leaked information.
> 
> There is a common belief that, as opposed to e.g. the RSA cryptosystem, most post-quantum cryptosystems are usually resistant against partial key exposure attacks. We strongly question this belief by constructing partial key exposure attacks on code-based, multivariate, and lattice-based schemes (BIKE, Rainbow and NTRU). Our attacks exploit the redundancy that modern PQ cryptosystems inherently use for efficiency reasons. The application and development of techniques from information set decoding plays a crucial role for achieving our results.
> 
> On the theoretical side, we show non-trivial information leakage bounds that allow for a polynomial time key recovery attack. As an example, for all schemes the knowledge of a constant fraction of the secret key bits suffices to reconstruct the full key in polynomial time.
> 
> Even if we no longer insist on polynomial time attacks, most of our attacks extend well and remain feasible up to large erasure and error rates. In the case of BIKE for example we obtain attack complexities around 60 bits when half of the secret key bits are erased, or a quarter of the secret key bits are faulty.
> 
> Our results show that even highly error-prone key leakage of modern PQ cryptosystems may lead to full secret key recoveries.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-15982-4_12](https://doi.org/10.1007/978-3-031-15982-4_12)
## Improving Support-Minors Rank Attacks: Applications to Gđisplaystyle eMSS and Rainbow.
🌍 **[English](../../../docs/en/Crypto/Crypto[2022-3].md#improving-support-minors-rank-attacks-applications-to-g-isplaystyle-emss-and-rainbow)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2022-3].md#improving-support-minors-rank-attacks-applications-to-g-isplaystyle-emss-and-rainbow)
### Authors
* John Baena, Universidad Nacional de Colombia, Bogotá, Colombia
* Daniel Cabarcas, Universidad Nacional de Colombia, Bogotá, Colombia
* Pierre Briaud, Sorbonne Universités, UPMC Univ Paris 06, Paris, France
* Pierre Briaud, Inria, Team COSMIQ, Paris, France
* Ray Perlner, National Institute of Standards and Technology, Gaithersburg, USA
* Daniel Smith-Tone, National Institute of Standards and Technology, Gaithersburg, USA
* Daniel Smith-Tone, University of Louisville, Louisville, USA
* Javier Verbel, Technology Innovation Institute, Abu Dhabi, UAE
### Abstract
> The Support-Minors (SM) method has opened new routes to attack multivariate schemes with rank properties that were previously impossible to exploit, as shown by the recent attacks of [9, 40] on the Round 3 NIST candidates G\(\displaystyle e\)MSS and Rainbow respectively. In this paper, we study this SM approach more in depth and we propose a greatly improved attack on G\(\displaystyle e\)MSS based on this Support-Minors method. Even though G\(\displaystyle e\)MSS was already affected by [40], our attack affects it even more and makes it completely unfeasible to repair the scheme by simply increasing the size of its parameters or even applying the recent projection technique from [36] whose purpose was to make G\(\displaystyle e\)MSS immune to [40]. For instance, our attack on the G\(\displaystyle e\)MSS128 parameter set has estimated time complexity \(\displaystyle 2^{72}\), and repairing the scheme by applying [36] would result in a signature with slower signing time by an impractical factor of \(\displaystyle 2^{14}\). Another contribution is to suggest optimizations that can reduce memory access costs for an XL strategy on a large SM system using the Block-Wiedemann algorithm as subroutine when these costs are a concern. In a memory cost model based on [7], we show that the rectangular MinRank attack from [9] may indeed reduce the security for all Round 3 Rainbow parameter sets below their targeted security strengths, contradicting the lower bound claimed by [41] using the same memory cost model.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-15982-4_13](https://doi.org/10.1007/978-3-031-15982-4_13)
## log *-Round Game-Theoretically-Fair Leader Election.
🌍 **[English](../../../docs/en/Crypto/Crypto[2022-3].md#log-round-game-theoretically-fair-leader-election)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2022-3].md#log-round-game-theoretically-fair-leader-election)
### Authors
* Ilan Komargodski, School of Computer Science and Engineering, Hebrew University of Jerusalem, 91904, Jerusalem, Israel
* Ilan Komargodski, NTT Research, Sunnyvale, 94085, USA
* Shin’ichiro Matsuo, NTT Research, Sunnyvale, 94085, USA
* Shin’ichiro Matsuo, Department of Computer Science, Georgetown University, Washington D.C., 20057, USA
* Elaine Shi, Computer Science Department, Carnegie Mellon University, Pittsburgh, 15213, USA
* Ke Wu, Computer Science Department, Carnegie Mellon University, Pittsburgh, 15213, USA
### Abstract
> It is well-known that in the presence of majority coalitions, strongly fair coin toss is impossible. A line of recent works have shown that by relaxing the fairness notion to game theoretic, we can overcome this classical lower bound. In particular, Chung et al. (CRYPTO’21) showed how to achieve approximately (game-theoretically) fair leader election in the presence of majority coalitions, with round complexity as small as \(O(\log \log n)\) rounds.
> 
> In this paper, we revisit the round complexity of game-theoretically fair leader election. We construct \(O(\log ^* n)\) rounds leader election protocols that achieve \((1-o(1))\)-approximate fairness in the presence of \((1-o(1)) n\)-sized coalitions. Our protocols achieve the same round-fairness trade-offs as Chung et al.’s and have the advantage of being conceptually simpler. Finally, we also obtain game-theoretically fair protocols for committee election which might be of independent interest.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-15982-4_14](https://doi.org/10.1007/978-3-031-15982-4_14)
## Gossiping for Communication-Efficient Broadcast.
🌍 **[English](../../../docs/en/Crypto/Crypto[2022-3].md#gossiping-for-communication-efficient-broadcast)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2022-3].md#gossiping-for-communication-efficient-broadcast)
### Authors
* Georgios Tsimos, University of Maryland, College Park, USA
* Julian Loss, CISPA Helmholtz Center for Information Security, Saarbrücken, Germany
* Charalampos Papamanthou, Yale University, New Haven, USA
### Abstract
> Byzantine Broadcast is crucial for many cryptographic protocols such as secret sharing, multiparty computation and blockchain consensus. In this paper we apply gossiping (propagating a message by sending to a few random parties who in turn do the same, until the message is delivered) and propose new communication-efficient protocols, under dishonest majority, for Single-Sender Broadcast (BC) and Parallel Broadcast (PBC), improving the state-of-the-art in several ways.
> 
> As our warm-up result, we present a randomized protocol for BC which achieves \(O(n^2\kappa ^2)\) communication complexity from plain public key setup assumptions. This is the first protocol with subcubic communication in this setting, but operates only against static adversaries.
> 
> Using ideas from our BC protocol, we move to our central contribution and present two protocols for PBC that are secure against adaptive adversaries. To the best of our knowledge we are the first to study PBC specifically: All previous approaches for Parallel Broadcast naively run n instances of single-sender Broadcast, increasing the communication complexity by an undesirable factor of n. Our insight of avoiding black-box invocations of BC is particularly crucial for achieving our asymptotic improvements. In particular:
> 
> 1. Our first PBC protocol achieves \(\tilde{O}(n^3\kappa ^2)\) communication complexity and relies only on plain public key setup assumptions.
> 
> 2. Our second PBC protocol uses trusted setup and achieves nearly optimal communication complexity \(\tilde{O}(n^2\kappa ^4)\).
> 
> Both PBC protocols yield an almost linear improvement over the best known solutions involving n parallel invocations of the respective BC protocols such as those of Dolev and Strong (SIAM Journal on Computing, 1983) and Chan et al. (Public Key Cryptography, 2020). Central to our PBC protocols is a new problem that we define and solve, which we name “Converge”. In Converge, parties must run an adaptively-secure and efficient protocol such that by the end of the protocol, all honest parties that remain possess a superset of the union of the initial honest parties’ inputs.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-15982-4_15](https://doi.org/10.1007/978-3-031-15982-4_15)
## Nearly Optimal Property Preserving Hashing.
🌍 **[English](../../../docs/en/Crypto/Crypto[2022-3].md#nearly-optimal-property-preserving-hashing)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2022-3].md#nearly-optimal-property-preserving-hashing)
### Authors
* Justin Holmgren, NTT Research, Sunnyvale, CA, 94085, USA
* Daniel Wichs, NTT Research, Sunnyvale, CA, 94085, USA
* Minghao Liu, Northeastern University, Boston, MA, 02115, USA
* LaKyah Tyner, Northeastern University, Boston, MA, 02115, USA
* Daniel Wichs, Northeastern University, Boston, MA, 02115, USA
### Abstract
> Property-preserving hashing (PPH) consists of a family of compressing hash functions h such that, for any two inputs x, y, we can correctly identify whether some property P(x, y) holds given only the digests h(x), h(y). In a basic PPH, correctness should hold with overwhelming probability over the choice of h when x, y are worst-case values chosen a-priori and independently of h. In an adversarially robust PPH (RPPH), correctness must hold even when x, y are chosen adversarially and adaptively depending on h. Here, we study (R)PPH for the property that the Hamming distance between x and y is at most t.
> 
> The notion of (R)PPH was introduced by Boyle, LaVigne and Vaikuntanathan (ITCS ’19), and further studied by Fleischhacker, Simkin (Eurocrypt ’21) and Fleischhacker, Larsen, Simkin (Eurocrypt ’22). In this work, we obtain improved constructions that are conceptually simpler, have nearly optimal parameters, and rely on more general assumptions than prior works. Our results are:
> 
> We construct information-theoretic non-robust PPH for Hamming distance via syndrome list-decoding of linear error-correcting codes. We provide a lower bound showing that this construction is essentially optimal.
> 
> We make the above construction robust with little additional overhead, by relying on homomorphic collision-resistant hash functions, which can be constructed from either the discrete-logarithm or the short-integer-solution assumptions. The resulting RPPH achieves improved compression compared to prior constructions, and is nearly optimal.
> 
> We also show an alternate construction of RPPH for Hamming distance under the minimal assumption that standard collision-resistant hash functions exist. The compression is slightly worse than our optimized construction using homomorphic collision-resistance, but essentially matches the prior state of the art constructions from specific algebraic assumptions.
> 
> Lastly, we study a new notion of randomized robust PPH (R2P2H) for Hamming distance, which relaxes RPPH by allowing the hashing algorithm itself to be randomized. We give an information-theoretic construction with optimal parameters.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-15982-4_16](https://doi.org/10.1007/978-3-031-15982-4_16)
## Collision-Resistance from Multi-Collision-Resistance.
🌍 **[English](../../../docs/en/Crypto/Crypto[2022-3].md#collision-resistance-from-multi-collision-resistance)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2022-3].md#collision-resistance-from-multi-collision-resistance)
### Authors
* Ron D. Rothblum, Technion, Haifa, Israel
* Prashant Nalini Vasudevan, National University of Singapore, Singapore, Singapore
### Abstract
> Collision-resistant hash functions (\(\textsf{CRH}\)) are a fundamental and ubiquitous cryptographic primitive. Several recent works have studied a relaxation of \(\textsf{CRH}\) called t-way multi-collision-resistant hash functions (\(t\text {-}\textsf{MCRH}\)). These are families of functions for which it is computationally hard to find a t-way collision, even though such collisions are abundant (and even \((t-1)\)-way collisions may be easy to find). The case of \(t=2\) corresponds to standard \(\textsf{CRH}\), but it is natural to study t-\(\textsf{MCRH}\) for larger values of t.
> 
> Multi-collision-resistance seems to be a qualitatively weaker property than standard collision-resistance. Nevertheless, in this work we show a non-blackbox transformation of any moderately shrinking t-\(\textsf{MCRH}\), for \(t \in \{3,4\}\), into an (infinitely often secure) \(\textsf{CRH}\). This transformation is non-constructive – we can prove the existence of a \(\textsf{CRH}\) but cannot explicitly point out a construction.
> 
> Our result partially extends to larger values of t. In particular, we show that for suitable values of \(t>t'\), we can transform a t-\(\textsf{MCRH}\) into a \(t'\)-\(\textsf{MCRH}\), at the cost of reducing the shrinkage of the resulting hash function family and settling for infinitely often security. This result utilizes the list-decodability properties of Reed-Solomon codes.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-15982-4_17](https://doi.org/10.1007/978-3-031-15982-4_17)
## Post-quantum Simulatable Extraction with Minimal Assumptions: Black-Box and Constant-Round.
🌍 **[English](../../../docs/en/Crypto/Crypto[2022-3].md#post-quantum-simulatable-extraction-with-minimal-assumptions-black-box-and-constant-round)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2022-3].md#post-quantum-simulatable-extraction-with-minimal-assumptions-black-box-and-constant-round)
### Authors
* Nai-Hui Chia, Rice University, Houston, USA
* Kai-Min Chung, Academia Sinica, Taipei, Taiwan
* Xiao Liang, Stony Brook University, Stony Brook, USA
* Takashi Yamakawa, NTT Social Informatics Laboratories, Tokyo, Japan
### Abstract
> From the minimal assumption of post-quantum semi-honest oblivious transfers, we build the first \(\varepsilon \)-simulatable two-party computation (2PC) against quantum polynomial-time (QPT) adversaries that is both constant-round and black-box (for both the construction and security reduction). A recent work by Chia, Chung, Liu, and Yamakawa (FOCS’21) shows that post-quantum 2PC with standard simulation-based security is impossible in constant rounds, unless either \({\textbf{NP}}\subseteq \textbf{BQP}\) or relying on non-black-box simulation. The \(\varepsilon \)-simulatability we target is a relaxation of the standard simulation-based security that allows for an arbitrarily small noticeable simulation error \(\varepsilon \). Moreover, when quantum communication is allowed, we can further weaken the assumption to post-quantum secure one-way functions (PQ-OWFs), while maintaining the constant-round and black-box property.
> 
> Our techniques also yield the following set of constant-round and black-box two-party protocols secure against QPT adversaries, only assuming black-box access to PQ-OWFs:
> 
> extractable commitments for which the extractor is also an \(\varepsilon \)-simulator;
> 
> \(\varepsilon \)-zero-knowledge commit-and-prove whose commit stage is extractable with \(\varepsilon \)-simulation;
> 
> \(\varepsilon \)-simulatable coin-flipping;
> 
> \(\varepsilon \)-zero-knowledge arguments of knowledge for \({\textbf{NP}}\) for which the knowledge extractor is also an \(\varepsilon \)-simulator;
> 
> \(\varepsilon \)-zero-knowledge arguments for \(\textbf{QMA}\).
> 
> At the heart of the above results is a black-box extraction lemma showing how to efficiently extract secrets from QPT adversaries while disturbing their quantum states in a controllable manner, i.e., achieving \(\varepsilon \)-simulatability of the after-extraction state of the adversary.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-15982-4_18](https://doi.org/10.1007/978-3-031-15982-4_18)
## The Gap Is Sensitive to Size of Preimages: Collapsing Property Doesn't Go Beyond Quantum Collision-Resistance for Preimages Bounded Hash Functions.
🌍 **[English](../../../docs/en/Crypto/Crypto[2022-3].md#the-gap-is-sensitive-to-size-of-preimages-collapsing-property-doesnt-go-beyond-quantum-collision-resistance-for-preimages-bounded-hash-functions)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2022-3].md#the-gap-is-sensitive-to-size-of-preimages-collapsing-property-doesnt-go-beyond-quantum-collision-resistance-for-preimages-bounded-hash-functions)
### Authors
* Shujiao Cao, State Key Laboratory of Information Security, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, 100093, China
* Rui Xue, State Key Laboratory of Information Security, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, 100093, China
* Shujiao Cao, School of Cyber Security, University of Chinese Academy of Sciences, Beijing, 100049, China
* Rui Xue, School of Cyber Security, University of Chinese Academy of Sciences, Beijing, 100049, China
### Abstract
> As an enhancement of quantum collision-resistance, the collapsing property of hash functions proposed by Unruh (EUROCRYPT 2016) emphasizes the hardness for distinguishing a superposition state of a hash value from a collapsed one. The collapsing property trivially implies the quantum collision-resistance. However, it remains to be unknown whether there is a reduction from the collapsing hash functions to the quantum collision-resistant hash functions. In this paper, we further study the relations between these two properties and derive two intriguing results as follows:
> 
> Firstly, when the size of preimages of each hash value is bounded by some polynomial, we demonstrate that the collapsing property and the collision-resistance must hold simultaneously. This result is proved via a semi-black-box manner by taking advantage of the invertibility of a unitary quantum circuit.
> 
> Next, we further consider the relations between these two properties in the exponential-sized preimages case. By giving a construction of polynomial bounded hash functions, which preserves the quantum collision-resistance, we show the existence of collapsing hash functions is implied by the quantum collision-resistant hash functions when the size of preimages is not too large to the expected value.
> 
> Our results indicate that the gap between these two properties is sensitive to the size of preimages. As a corollary, our results also reveal the non-existence of polynomial bounded equivocal collision-resistant hash functions.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-15982-4_19](https://doi.org/10.1007/978-3-031-15982-4_19)
## New Constructions of Collapsing Hashes.
🌍 **[English](../../../docs/en/Crypto/Crypto[2022-3].md#new-constructions-of-collapsing-hashes)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2022-3].md#new-constructions-of-collapsing-hashes)
### Authors
* Mark Zhandry, NTT Research, Sunnyvale, USA
* Mark Zhandry, Princeton University, Princeton, USA
### Abstract
> Collapsing is a post-quantum strengthening of collision resistance, needed to lift many classical results to the quantum setting. Unfortunately, the only existing standard-model proofs of collapsing hashes require LWE. We construct the first collapsing hashes from the quantum hardness of any one of the following problems:
> 
> LPN in a variety of low noise or high-hardness regimes, essentially matching what is known for collision resistance from LPN.
> 
> Finding cycles on exponentially-large expander graphs, such as those arising from isogenies on elliptic curves.
> 
> The “optimal” hardness of finding collisions in any hash function.
> 
> The polynomial hardness of finding collisions, assuming a certain plausible regularity condition on the hash.
> 
> As an immediate corollary, we obtain the first statistically hiding post-quantum commitments and post-quantum succinct arguments (of knowledge) under the same assumptions. Our results are obtained by a general theorem which shows how to construct a collapsing hash \(H'\) from a post-quantum collision-resistant hash function H, regardless of whether or not H itself is collapsing, assuming H satisfies a certain regularity condition we call “semi-regularity”.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-15982-4_20](https://doi.org/10.1007/978-3-031-15982-4_20)
## Statistically Sender-Private OT from LPN and Derandomization.
🌍 **[English](../../../docs/en/Crypto/Crypto[2022-3].md#statistically-sender-private-ot-from-lpn-and-derandomization)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2022-3].md#statistically-sender-private-ot-from-lpn-and-derandomization)
### Authors
* Nir Bitansky, Tel Aviv University, Tel Aviv, Israel
* Sapir Freizeit, Tel Aviv University, Tel Aviv, Israel
### Abstract
> We construct a two-message oblivious transfer protocol with statistical sender privacy (SSP OT) based on the Learning Parity with Noise (LPN) Assumption and a standard Nisan-Wigderson style derandomization assumption. Beyond being of interest on their own, SSP OT protocols have proven to be a powerful tool toward minimizing the round complexity in a wide array of cryptographic applications from proofs systems, through secure computation protocols, to hard problems in statistical zero knowledge (SZK).
> 
> The protocol is plausibly post-quantum secure. The only other constructions with plausible post quantum security are based on the Learning with Errors (LWE) Assumption. Lacking the geometric structure of LWE, our construction and analysis rely on a different set of techniques.
> 
> Technically, we first construct an SSP OT protocol in the common random string model from LPN alone, and then derandomize the common random string. Most of the technical difficulty lies in the first step. Here we prove a robustness property of the inner product randomness extractor to a certain type of linear splitting attacks. A caveat of our construction is that it relies on the so called low noise regime of LPN. This aligns with our current complexity-theoretic understanding of LPN, which only in the low noise regime is known to imply hardness in SZK.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-15982-4_21](https://doi.org/10.1007/978-3-031-15982-4_21)
## Constructive Post-Quantum Reductions.
🌍 **[English](../../../docs/en/Crypto/Crypto[2022-3].md#constructive-post-quantum-reductions)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2022-3].md#constructive-post-quantum-reductions)
### Authors
* Nir Bitansky, Tel Aviv University, Tel Aviv, Israel
* Zvika Brakerski, Weizmann Institute of Science, Rechovot, Israel
* Yael Tauman Kalai, Microsoft Research, Cambridge, MA, USA
* Yael Tauman Kalai, Massachusetts Institute of Technology, Cambridge, MA, USA
### Abstract
> Is it possible to convert classical reductions into post-quantum ones? It is customary to argue that while this is problematic in the interactive setting, non-interactive reductions do carry over. However, when considering quantum auxiliary input, this conversion results in a non-constructive post-quantum reduction that requires duplicating the quantum auxiliary input, which is in general inefficient or even impossible. This violates the win-win premise of provable cryptography: an attack against a cryptographic primitive should lead to an algorithmic advantage.
> 
> We initiate the study of constructive quantum reductions and present positive and negative results for converting large classes of classical reductions to the post-quantum setting in a constructive manner. We show that any non-interactive non-adaptive reduction from assumptions with a polynomial solution space (such as decision assumptions) can be made post-quantum constructive. In contrast, assumptions with super-polynomial solution space (such as general search assumptions) cannot be generally converted.
> 
> Along the way, we make several additional contributions:
> 
> 1. We put forth a framework for reductions (or general interaction) with stateful solvers for a computational problem, that may change their internal state between consecutive calls. We show that such solvers can still be utilized. This framework and our results are meaningful even in the classical setting.
> 
> 2. A consequence of our negative result is that quantum auxiliary input that is useful against a problem with a super-polynomial solution space cannot be generically “restored” post-measurement. This shows that the novel rewinding technique of Chiesa et al. (FOCS 2021) is tight in the sense that it cannot be extended beyond a polynomial measurement space.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-15982-4_22](https://doi.org/10.1007/978-3-031-15982-4_22)
## Differential Cryptanalysis in the Fixed-Key Model.
🌍 **[English](../../../docs/en/Crypto/Crypto[2022-3].md#differential-cryptanalysis-in-the-fixed-key-model)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2022-3].md#differential-cryptanalysis-in-the-fixed-key-model)
### Authors
* Tim Beyne, imec-COSIC, KU Leuven, Leuven, Belgium
* Vincent Rijmen, imec-COSIC, KU Leuven, Leuven, Belgium
* Vincent Rijmen, University of Bergen, Bergen, Norway
### Abstract
> A systematic approach to the fixed-key analysis of differential probabilities is proposed. It is based on the propagation of ‘quasidifferential trails’, which keep track of probabilistic linear relations on the values satisfying a differential characteristic in a theoretically sound way. It is shown that the fixed-key probability of a differential can be expressed as the sum of the correlations of its quasidifferential trails.
> 
> The theoretical foundations of the method are based on an extension of the difference-distribution table, which we call the quasidifferential transition matrix. The role of these matrices is analogous to that of correlation matrices in linear cryptanalysis. This puts the theory of differential and linear cryptanalysis on an equal footing.
> 
> The practical applicability of the proposed methodology is demonstrated by analyzing several differentials for RECTANGLE, KNOT, Speck and Simon. The analysis is automated and applicable to other SPN and ARX designs. Several attacks are shown to be invalid, most others turn out to work only for some keys but can be improved for weak-keys.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-15982-4_23](https://doi.org/10.1007/978-3-031-15982-4_23)
## Simplified MITM Modeling for Permutations: New (Quantum) Attacks.
🌍 **[English](../../../docs/en/Crypto/Crypto[2022-3].md#simplified-mitm-modeling-for-permutations-new-quantum-attacks)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2022-3].md#simplified-mitm-modeling-for-permutations-new-quantum-attacks)
### Authors
* André Schrottenloher, Cryptology Group, CWI, Amsterdam, The Netherlands
* Marc Stevens, Cryptology Group, CWI, Amsterdam, The Netherlands
### Abstract
> Meet-in-the-middle (MITM) is a general paradigm where internal states are computed along two independent paths (‘forwards’ and ‘backwards’) that are then matched. Over time, MITM attacks improved using more refined techniques and exploiting additional freedoms and structure, which makes it more involved to find and optimize such attacks. This has led to the use of detailed attack models for generic solvers to automatically search for improved attacks, notably a MILP model developed by Bao et al. at EUROCRYPT 2021.
> 
> In this paper, we study a simpler MILP modeling combining a greatly reduced attack representation as input to the generic solver, together with a theoretical analysis that, for any solution, proves the existence and complexity of a detailed attack. This modeling allows to find both classical and quantum attacks on a broad class of cryptographic permutations. First, Present-like constructions, with the permutations from the Spongent hash functions: we improve the MITM step in distinguishers by up to 3 rounds. Second, AES-like designs: despite being much simpler than Bao et al.’s, our model allows to recover the best previous results. The only limitation is that we do not use degrees of freedom from the key schedule. Third, we show that the model can be extended to target more permutations, like Feistel networks. In this context we give new Guess-and-determine attacks on reduced Simpira v2 and Sparkle.
> 
> Finally, using our model, we find several new quantum preimage and pseudo-preimage attacks (e.g. Haraka v2, Simpira v2...) targeting the same number of rounds as the classical attacks.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-15982-4_24](https://doi.org/10.1007/978-3-031-15982-4_24)
## Constructing and Deconstructing Intentional Weaknesses in Symmetric Ciphers.
🌍 **[English](../../../docs/en/Crypto/Crypto[2022-3].md#constructing-and-deconstructing-intentional-weaknesses-in-symmetric-ciphers)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2022-3].md#constructing-and-deconstructing-intentional-weaknesses-in-symmetric-ciphers)
### Authors
* Christof Beierle, Ruhr University Bochum, Bochum, Germany
* Gregor Leander, Ruhr University Bochum, Bochum, Germany
* Tim Beyne, imec-COSIC, KU Leuven, Leuven, Belgium
* Patrick Felke, University of Applied Sciences Emden/Leer, Emden, Germany
### Abstract
> Deliberately weakened ciphers are of great interest in political discussion on law enforcement, as in the constantly recurring crypto wars, and have been put in the spotlight of academics by recent progress. A paper at Eurocrypt 2021 showed a strong indication that the security of the widely-deployed stream cipher GEA-1 was deliberately and secretly weakened to 40 bits in order to fulfill European export restrictions that have been in place in the late 1990s. However, no explanation of how this could have been constructed was given. On the other hand, we have seen the MALICIOUS design framework, published at CRYPTO 2020, that allows to construct tweakable block ciphers with a backdoor, where the difficulty of recovering the backdoor relies on well-understood cryptographic assumptions. The constructed tweakable block cipher however is rather unusual and very different from, say, general-purpose ciphers like the AES.
> 
> In this paper, we pick up both topics. For GEA-1 we thoroughly explain how the weakness was constructed, solving the main open question of the work mentioned above. By generalizing MALICIOUS we – for the first time – construct backdoored tweakable block ciphers that follow modern design principles for general-purpose block ciphers, i.e., more natural-looking deliberately weakened tweakable block ciphers.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-15982-4_25](https://doi.org/10.1007/978-3-031-15982-4_25)
## Simon's Algorithm and Symmetric Crypto: Generalizations and Automatized Applications.
🌍 **[English](../../../docs/en/Crypto/Crypto[2022-3].md#simons-algorithm-and-symmetric-crypto-generalizations-and-automatized-applications)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2022-3].md#simons-algorithm-and-symmetric-crypto-generalizations-and-automatized-applications)
### Authors
* Federico Canale, Ruhr University Bochum, Bochum, Germany
* Gregor Leander, Ruhr University Bochum, Bochum, Germany
* Lukas Stennes, Ruhr University Bochum, Bochum, Germany
### Abstract
> In this paper we deepen our understanding of how to apply Simon’s algorithm to break symmetric cryptographic primitives.
> 
> On the one hand, we automate the search for new attacks. Using this approach we automatically find the first efficient key-recovery attacks against constructions like 5-round MISTY L-FK or 5-round Feistel-FK (with internal permutation) using Simon’s algorithm.
> 
> On the other hand, we study generalizations of Simon’s algorithm using non-standard Hadamard matrices, with the aim to expand the quantum symmetric cryptanalysis toolkit with properties other than the periods. Our main conclusion here is that none of these generalizations can accomplish that, and we conclude that exploiting non-standard Hadamard matrices with quantum computers to break symmetric primitives will require fundamentally new attacks.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-15982-4_26](https://doi.org/10.1007/978-3-031-15982-4_26)
