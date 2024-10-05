# Crypto[2024-5]
## The One-Wayness of Jacobi Signatures.
🌍 **[English](../../../docs/en/Crypto/Crypto[2024-5].md#the-one-wayness-of-jacobi-signatures)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-5].md#the-one-wayness-of-jacobi-signatures)
### Authors
* Henry Corrigan-Gibbs, MIT, Cambridge, MA, USA
* David J. Wu, University of Texas at Austin, Austin, TX, USA
### Abstract
> We show that under a mild number-theoretic conjecture, recovering an integer from its Jacobi signature modulo \(N = p^2 q\), for primes p and q, is as hard as factoring N. This relates, for the first time, the one-wayness of a pseudorandom generator that Damgård proposed in 1988, to a standard number-theoretic problem. In addition, we show breaking the Jacobi pseudorandom function is no harder than factoring.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-68388-6_1](https://doi.org/10.1007/978-3-031-68388-6_1)
## Generic and Algebraic Computation Models: When AGM Proofs Transfer to the GGM.
🌍 **[English](../../../docs/en/Crypto/Crypto[2024-5].md#generic-and-algebraic-computation-models-when-agm-proofs-transfer-to-the-ggm)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-5].md#generic-and-algebraic-computation-models-when-agm-proofs-transfer-to-the-ggm)
### Authors
* Joseph Jaeger, School of Cybersecurity and Privacy, Georgia Institute of Technology, Atlanta, GA, USA
* Deep Inder Mohan, School of Cybersecurity and Privacy, Georgia Institute of Technology, Atlanta, GA, USA
### Abstract
> The Fuchsbauer, Kiltz, and Loss (Crypto 2018) claim that (some) hardness results in the algebraic group model imply the same hardness results in the generic group model was recently called into question by Katz, Zhang, and Zhou (Asiacrypt 2022). The latter gave an interpretation of the claim under which it is incorrect. We give an alternate interpretation under which it is correct, using natural frameworks for capturing generic and algebraic models for arbitrary algebraic structures. Most algebraic analyses in the literature can be captured by our frameworks, making the claim correct for them.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-68388-6_2](https://doi.org/10.1007/978-3-031-68388-6_2)
## Limits on the Power of Prime-Order Groups: Separating Q-Type from Static Assumptions.
🌍 **[English](../../../docs/en/Crypto/Crypto[2024-5].md#limits-on-the-power-of-prime-order-groups-separating-q-type-from-static-assumptions)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-5].md#limits-on-the-power-of-prime-order-groups-separating-q-type-from-static-assumptions)
### Authors
* George Lu, UT Austin, Austin, USA
* Mark Zhandry, NTT Research, Sunnyvale, USA
### Abstract
> Subgroup decision techniques on cryptographic groups and pairings have been critical for numerous applications. Originally conceived in the composite-order setting, there is a large body of work showing how to instantiate subgroup decision techniques in the prime-order setting as well. In this work, we demonstrate the first barrier to this research program, by demonstrating an important setting where composite-order techniques cannot be replicated in the prime-order setting.
> 
> In particular, we focus on the case of q-type assumptions, which are ubiquitous in group- and pairing-based cryptography, but unfortunately are less desirable than the more well-understood static assumptions. Subgroup decision techniques have had great success in removing q-type assumptions, even allowing q-type assumptions to be generically based on static assumptions on composite-order groups. Our main result shows that the same likely does not hold in the prime order setting. Namely, we show that a large class of q-type assumptions, including the security definition of a number of cryptosystems, cannot be proven secure in a black box way from any static assumption.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-68388-6_3](https://doi.org/10.1007/978-3-031-68388-6_3)
## QFESTA: Efficient Algorithms and Parameters for FESTA Using Quaternion Algebras.
🌍 **[English](../../../docs/en/Crypto/Crypto[2024-5].md#qfesta-efficient-algorithms-and-parameters-for-festa-using-quaternion-algebras)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-5].md#qfesta-efficient-algorithms-and-parameters-for-festa-using-quaternion-algebras)
### Authors
* Kohei Nakagawa, NTT Social Informatics Laboratories, Minato City, Japan
* Hiroshi Onuki, The University of Tokyo, Bunkyo City, Japan
### Abstract
> In 2023, Basso, Maino, and Pope proposed FESTA (Fast Encryption from Supersingular Torsion Attacks), an isogeny-based public-key encryption (PKE) protocol that uses the SIDH attack for decryption. In the same paper, they proposed parameters for that protocol, but the parameters require high-degree isogeny computations. In this paper, we introduce QFESTA (Quaternion Fast Encapsulation from Supersingular Torsion Attacks), a new variant of FESTA that works with better parameters using quaternion algebras and achieves IND-CCA security under QROM. To realize our protocol, we construct a new algorithm to compute an isogeny of non-smooth degree using quaternion algebras and the SIDH attack. Our protocol relies solely on (2, 2)-isogeny and 3-isogeny computations, promising a substantial reduction in computational costs. In addition, our protocol has significantly smaller data sizes for public keys and ciphertexts, approximately half size of the original FESTA.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-68388-6_4](https://doi.org/10.1007/978-3-031-68388-6_4)
## Radical $\root N \of {\mathrm {\acute{e}lu}}$ Isogeny Formulae.
🌍 **[English](../../../docs/en/Crypto/Crypto[2024-5].md#radical-root-n-of-mathrm-acute-e-lu-isogeny-formulae)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-5].md#radical-root-n-of-mathrm-acute-e-lu-isogeny-formulae)
### Authors
* Thomas Decru, Université Libre de Bruxelles, Bruxelles, Belgium
### Abstract
> We provide explicit radical N-isogeny formulae for all odd integers N. The formulae are compact closed-form expressions which require one Nth root computation and \(\mathcal {O}(N)\) basic field operations. The formulae are highly efficient to compute a long chain of N-isogenies, and have the potential to be extremely beneficial for speeding up certain cryptographic protocols such as CSIDH. Unfortunately, the formulae are conjectured, but we provide ample supporting evidence which strongly suggests their correctness.
> 
> For CSIDH-512, we notice an additional 35% speed-up when using radical isogenies up to \(N=199\), compared to the work by Castryck, Decru, Houben and Vercauteren, which uses radical isogenies up to \(N=19\) only. The addition of our radical isogenies also speeds up the computation of larger class group actions in a comparable fashion.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-68388-6_5](https://doi.org/10.1007/978-3-031-68388-6_5)
## Cryptanalysis of Lattice-Based Sequentiality Assumptions and Proofs of Sequential Work.
🌍 **[English](../../../docs/en/Crypto/Crypto[2024-5].md#cryptanalysis-of-lattice-based-sequentiality-assumptions-and-proofs-of-sequential-work)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-5].md#cryptanalysis-of-lattice-based-sequentiality-assumptions-and-proofs-of-sequential-work)
### Authors
* Chris Peikert, Computer Science and Engineering, University of Michigan, Ann Arbor, USA
* Yi Tang, Computer Science and Engineering, University of Michigan, Ann Arbor, USA
### Abstract
> This work completely breaks the sequentiality assumption (and broad generalizations thereof) underlying the candidate lattice-based proof of sequential work (PoSW) recently proposed by Lai and Malavolta at CRYPTO 2023. In addition, it breaks an essentially identical variant of the PoSW, which differs from the original in only an arbitrary choice that is immaterial to the design and security proof (under the falsified assumption). This suggests that whatever security the original PoSW may have is fragile, and further motivates the search for a construction based on a sound lattice-based assumption.
> 
> Specifically, for sequentiality parameter T and SIS parameters \(n,q,m = n \log q\), the attack on the sequentiality assumption finds a solution of quasipolynomial norm \(m^{\lceil \log T\rceil }\) (or norm \(O\left( \sqrt{m}\right) ^{\lceil \log T\rceil }\) with high probability) in only logarithmic \(\tilde{O} _{n,q}(\log T)\) depth; this strongly falsifies the assumption that finding such a solution requires depth linear in T. (The \(\tilde{O} \) notation hides polylogarithmic factors in the variables appearing in its subscript.) Alternatively, the attack finds a solution of polynomial norm \(m^{1/\varepsilon }\) in depth \(\tilde{O} _{n,q}(T^{\varepsilon })\), for any constant \(\varepsilon > 0\). Similarly, the attack on the (slightly modified) PoSW constructs a valid proof in polylogarithmic \(\tilde{O} _{n,q}(\log ^2 T)\) depth, thus strongly falsifying the expectation that doing so requires linear sequential work.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-68388-6_6](https://doi.org/10.1007/978-3-031-68388-6_6)
## Memory-Sample Lower Bounds for LWE.
🌍 **[English](../../../docs/en/Crypto/Crypto[2024-5].md#memory-sample-lower-bounds-for-lwe)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-5].md#memory-sample-lower-bounds-for-lwe)
### Authors
* Mingqi Lu, Tsinghua University, Beijing, China
* Junzhao Yang, Tsinghua University, Beijing, China
### Abstract
> In this work, we show memory-sample lower bounds for the fundamental problem of learning with error (LWE). In this problem, a learner tries to learn a uniformly sampled \(x \sim \mathbb {Z}_q^n\) from a stream of inner products plus errors sampled from discrete Gaussians of scale \(\sigma \). Any learning algorithm requires either at least \(\varOmega (k^2 / \log (q / \sigma ))\) bits of memory, or at least \(2^{\varOmega (k)}\) many samples, where \(k = \varOmega (n \log (1 / (1 - \phi (q)/q)))\). This matches with the information-theoretic upper bound when q is prime. In addition to LWE, our bounds apply to a wide range of learning problems. Following the work of Garg, Raz, Tal [STOC 2018], we describe a learning problem by a learning matrix \(M :A \times X \rightarrow \{0, 1, \cdots , q-1\}\) together with an error matrix \(E\). The learner tries to learn \(x \sim X\) from a stream of samples, \((a_1, b_1), \cdots , (a_m, b_m)\), where for every i, \(a_i \sim A\), and \(b_i \leftarrow t\) with probability \(E_{M(a,x),t}\). We characterize the learning problems that can have memory-sample lower bounds as “q-balanced”, which is a generalization of the L2-extractor in [GRT18]. We also show a reduction from q-balanced to L2-extractor, which provides a general way to prove q-balanced and thus apply our bounds. Our proof builds on [GRT18] and the work of Garg, Kothari, Liu, Raz [APPROX/RANDOM 2021].

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-68388-6_7](https://doi.org/10.1007/978-3-031-68388-6_7)
## Improved Algorithms for Finding Fixed-Degree Isogenies Between Supersingular Elliptic Curves.
🌍 **[English](../../../docs/en/Crypto/Crypto[2024-5].md#improved-algorithms-for-finding-fixed-degree-isogenies-between-supersingular-elliptic-curves)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-5].md#improved-algorithms-for-finding-fixed-degree-isogenies-between-supersingular-elliptic-curves)
### Authors
* Benjamin Benčina, Royal Holloway, University of London, London, UK
* Péter Kutas, University of Birmingham, Birmingham, UK
* Christophe Petit, University of Birmingham, Birmingham, UK
* Charlotte Weitkämper, University of Birmingham, Birmingham, UK
* Péter Kutas, Eötvös Loránd University, Budapest, Hungary
* Charlotte Weitkämper, Eötvös Loránd University, Budapest, Hungary
* Simon-Philipp Merz, Applied Cryptography Group, ETH Zürich, Zürich, Switzerland
* Christophe Petit, Université libre de Bruxelles, Brussels, Belgium
* Miha Stopar, Université libre de Bruxelles, Brussels, Belgium
* Miha Stopar, Ethereum Foundation, Zug, Switzerland
### Abstract
> Finding isogenies between supersingular elliptic curves is a natural algorithmic problem which is known to be equivalent to computing the curves’ endomorphism rings.
> 
> When the isogeny is additionally required to have a specific known degree d, the problem appears to be somewhat different in nature, yet its hardness is also required for isogeny-based cryptography.
> 
> Let \(E_1,E_2\) be supersingular elliptic curves over \(\mathbb {F}_{p^2}\). We present improved classical and quantum algorithms that compute an isogeny of degree d between \(E_1\) and \(E_2\) if it exists. Let \(d \approx p^{1/2+ \epsilon }\) for some \(\epsilon >0\). Our essentially memory-free algorithms have better time complexity than meet-in-the-middle algorithms, which require exponential memory storage, in the range \(1/2\le \epsilon \le 3/4\) on a classical computer. For quantum computers, we improve the time complexity in the range \(0<\epsilon <5/2\).
> 
> Our strategy is to compute the endomorphism rings of both curves, compute the reduced norm form associated to \(\text {Hom}(E_1,E_2)\) and try to represent the integer d as a solution of this form. We present multiple approaches to solving this problem which combine guessing certain variables exhaustively (or use Grover’s search in the quantum case) with methods for solving quadratic Diophantine equations such as Cornacchia’s algorithm and multivariate variants of Coppersmith’s method. We provide implementations and experimental results for the different approaches. A solution to the norm form can then be efficiently translated to recover the sought-after isogeny using well-known techniques. As a consequence of our results we show that a recently introduced signature scheme from [3] does not reach NIST level I security.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-68388-6_8](https://doi.org/10.1007/978-3-031-68388-6_8)
## Traceable Secret Sharing: Strong Security and Efficient Constructions.
🌍 **[English](../../../docs/en/Crypto/Crypto[2024-5].md#traceable-secret-sharing-strong-security-and-efficient-constructions)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-5].md#traceable-secret-sharing-strong-security-and-efficient-constructions)
### Authors
* Dan Boneh, Stanford University, Stanford, CA, USA
* Aditi Partap, Stanford University, Stanford, CA, USA
* Lior Rotem, Stanford University, Stanford, CA, USA
### Abstract
> Suppose Alice uses a t-out-of-n secret sharing to store her secret key on n servers. Her secret key is protected as long as t of them do not collude. However, what if a less-than-t subset of the servers decides to offer the shares they have for sale? In this case, Alice should be able to hold them accountable, or else nothing prevents them from selling her shares. With this motivation in mind, Goyal, Song, and Srinivasan (CRYPTO 21) introduced the concept of traceable secret sharing. In such schemes, it is possible to provably trace the leaked secret shares back to the servers who leaked them. Goyal et al. presented the first construction of a traceable secret sharing scheme. However, secret shares in their construction are quadratic in the secret size, and their tracing algorithm is quite involved as it relies on Goldreich-Levin decoding.
> 
> In this work, we put forth new definitions and practical constructions for traceable secret sharing. In our model, some \(f < t\) servers output a reconstruction box R that may arbitrarily depend on their shares. Given additional \(t-f\) shares, R reconstructs and outputs the secret. The task is to trace R back to the corrupted servers given black-box access to R. Unlike Goyal et al., we do not assume that the tracing algorithm has any information on how the corrupted servers constructed R from the shares in their possession.
> 
> We then present two very efficient constructions of traceable secret sharing based on two classic secret sharing schemes. In both of our schemes, shares are only twice as large as the secret, improving over the quadratic overhead of Goyal et al. Our first scheme is obtained by presenting a new practical tracing algorithm for the widely-used Shamir secret sharing scheme. Our second construction is based on an extension of Blakley’s secret sharing scheme. Tracing in this scheme is optimally efficient, and requires just one successful query to R. We believe that our constructions are an important step towards bringing traceable secret-sharing schemes to practice. This work also raises several interesting open problems that we describe in the paper.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-68388-6_9](https://doi.org/10.1007/978-3-031-68388-6_9)
## Towards Breaking the Half-Barrier of Local Leakage-Resilient Shamir's Secret Sharing.
🌍 **[English](../../../docs/en/Crypto/Crypto[2024-5].md#towards-breaking-the-half-barrier-of-local-leakage-resilient-shamirs-secret-sharing)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-5].md#towards-breaking-the-half-barrier-of-local-leakage-resilient-shamirs-secret-sharing)
### Authors
* Hai H. Nguyen, Department of Computer Science, ETH Zurich, Zürich, Switzerland
### Abstract
> Advanced methods for repairing Reed-Solomon codes, exemplified by the work of Guruswami and Wooters (STOC 2016), can be exploited to launch local leakage attacks against Shamir secret-sharing schemes over characteristic-2 fields. Conversely, Benhamouda, Degwekar, Ishai, and Rabin (CRYPTO 2018) proved that high-threshold instances of Shamir’s secret sharing over prime fields are resilient to one-bit local leakage. Since then, extensive efforts have been made to lower the threshold. However, even for simple leakage such as quadratic residue, it remains uncertain whether Shamir’s scheme is leakage-resilient when the reconstruction threshold n is less than half the number of parties k. As highlighted by Maji, Paskin-Cherniavsky, Suad, and Wang (CRYPTO 2021), the common approach fails to establish the leakage resilience of Shamir’s scheme against quadratic residue leakage when \(k < n/2\). In many applications, the threshold must not exceed half the number of parties.
> 
> This work develops a new framework for studying the local leakage resilience of Shamir’s secret sharing over a finite field of prime order p. Our work demonstrates that Shamir secret sharing remains leakage resilient against almost all 1-bit local leakages, including quadratic residue leakage, even when \(k = cn\) for any constant c, provided the prime field is sufficiently large. This result extends to any MDS code-based secret sharing.
> 
> For the hardness of computation, we propose an explicit 2-bit leakage attack capable of determining the secret in Shamir secret sharing with a reconstruction threshold \(k = O(\sqrt{n})\) when \(p = \varTheta (n)\). Our attack translates into a repairing algorithm for Reed-Solomon codes.
> 
> Technically, our framework relies on additive combinatorics and character sums, specifically higher-order Fourier analysis. These connections may be of independent interest.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-68388-6_10](https://doi.org/10.1007/978-3-031-68388-6_10)
## Stochastic Secret Sharing with 1-Bit Shares and Applications to MPC.
🌍 **[English](../../../docs/en/Crypto/Crypto[2024-5].md#stochastic-secret-sharing-with-1-bit-shares-and-applications-to-mpc)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-5].md#stochastic-secret-sharing-with-1-bit-shares-and-applications-to-mpc)
### Authors
* Benny Applebaum, Tel-Aviv University, Tel-Aviv, Israel
* Eliran Kachlon, Tel-Aviv University, Tel-Aviv, Israel
### Abstract
> The problem of minimizing the share size of threshold secret-sharing schemes is a basic research question that has been extensively studied. Ideally, one strives for schemes in which the share size equals the secret size. While this is achievable for large secrets (Shamir, CACM ’79), no similar solutions are known for the case of binary, single-bit secrets. Current approaches often rely on so-called ramp secret sharing that achieves a constant share size at the expense of a slight gap between the privacy and the correctness thresholds. In the case of single-bit shares, this leads to a large gap which is typically unacceptable. The possibility of a meaningful notion of secret sharing scheme with 1-bit shares and almost optimal threshold has been left wide open. Of special interest is the case of threshold 0.5, which is motivated by information-theoretic honest-majority secure multiparty computation (MPC).
> 
> In this work, we present a new stochastic model for secret-sharing where each party is corrupted by the adversary with probability p, independently of the other parties, and correctness and privacy are required to hold with high probability over the choice of the corrupt parties. We present new secret sharing schemes with single-bit shares that tolerate any constant corruption probability \(p<0.5\). Our construction is based on a novel connection between such stochastic secret-sharing schemes and error-correcting codes that achieve capacity over the binary erasure channel.
> 
> Our schemes are linear and multiplicative. We demonstrate the usefulness of the model by using our new schemes to construct MPC protocols with security against an adversary that passively corrupts an arbitrary subset of 0.499n of the parties, where the online communication per party consists of a single bit per AND gate and zero communication per XOR gate. Unlike competing approaches for communication-efficient MPC, our solution is applicable even in a real-time model in which the parties should compute a Boolean circuit whose gates arrive in real-time, one at a time, and are not known in advance.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-68388-6_11](https://doi.org/10.1007/978-3-031-68388-6_11)
## Sometimes You Can't Distribute Random-Oracle-Based Proofs.
🌍 **[English](../../../docs/en/Crypto/Crypto[2024-5].md#sometimes-you-cant-distribute-random-oracle-based-proofs)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-5].md#sometimes-you-cant-distribute-random-oracle-based-proofs)
### Authors
* Jack Doerner, Brown University, Providence, USA
* Leah Namisa Rosenbloom, Brown University, Providence, USA
* Jack Doerner, Technion, Haifa, Israel
* Jack Doerner, Reichman University, Herzliya, Israel
* Yashvanth Kondi, Silence Labs (Deel), San Francisco, USA
### Abstract
> We investigate the conditions under which straight-line extractable NIZKs in the random oracle model (i.e. without a CRS) permit multiparty realizations that are black-box in the same random oracle. We show that even in the semi-honest setting, any MPC protocol to compute such a NIZK cannot make black-box use of the random oracle or a hash function instantiating it if security against all-but-one corruptions is desired, unless the number of queries made by the verifier to the oracle grows linearly with the number of parties. This presents a fundamental barrier to constructing efficient protocols to securely distribute the computation of NIZKs (and signatures) based on MPC-in-the-head, PCPs/IOPs, and sigma protocols compiled with transformations due to Fischlin, Pass, or Unruh.
> 
> When the adversary is restricted to corrupt only a constant fraction of parties, we give a positive result by means of a tailored construction, which demonstrates that our impossibility does not extend to weaker corruption models in general.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-68388-6_12](https://doi.org/10.1007/978-3-031-68388-6_12)
## Quantum Advantage from One-Way Functions.
🌍 **[English](../../../docs/en/Crypto/Crypto[2024-5].md#quantum-advantage-from-one-way-functions)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-5].md#quantum-advantage-from-one-way-functions)
### Authors
* Tomoyuki Morimae, Yukawa Institute for Theoretical Physics, Kyoto University, Kyoto, Japan
* Takashi Yamakawa, Yukawa Institute for Theoretical Physics, Kyoto University, Kyoto, Japan
* Takashi Yamakawa, NTT Social Informatics Laboratories, Tokyo, Japan
* Takashi Yamakawa, NTT Research Center for Theoretical Quantum Information, Atsugi, Japan
### Abstract
> Is quantum computing truly faster than classical computing? Demonstrating unconditional quantum computational advantage lies beyond the reach of the current complexity theory, and therefore we have to rely on some complexity assumptions. While various results on quantum advantage have been obtained, all necessitate relatively stronger or less standard assumptions in complexity theory or classical cryptography. In this paper, we show quantum advantage based on several fundamental assumptions, specifically relying solely on the existence of classically-secure one-way functions. Given the fact that one-way functions are necessary for almost all classical cryptographic primitives, our findings yield a surprising implication: if there is no quantum advantage, then there is no classical cryptography! More precisely, we introduce inefficient-verifier proofs of quantumness (IV-PoQ), and construct it from statistically-hiding and computationally-binding classical bit commitments. IV-PoQ is an interactive protocol between a verifier and a quantum polynomial-time prover consisting of two phases. In the first phase, the verifier is classical probabilistic polynomial-time, and it interacts with the quantum polynomial-time prover over a classical channel. In the second phase, the verifier becomes inefficient, and makes its decision based on the transcript of the first phase. If the quantum prover is honest, the inefficient verifier accepts with high probability, but any classical probabilistic polynomial-time malicious prover only has a small probability of being accepted by the inefficient verifier. In our construction, the inefficient verifier can be a classical deterministic polynomial-time algorithm that queries an \(\textbf{NP}\) oracle. Our construction demonstrates the following results based on the known constructions of statistically-hiding and computationally-binding commitments from one-way functions or distributional collision-resistant hash functions:
> 
> If one-way functions exist, then IV-PoQ exist.
> 
> If distributional collision-resistant hash functions exist (which exist if hard-on-average problems in \(\textbf{SZK}\) exist), then constant-round IV-PoQ exist.
> 
> We also demonstrate quantum advantage based on worst-case-hard assumptions. We define auxiliary-input IV-PoQ (AI-IV-PoQ) that only require that for any malicious prover, there exist infinitely many auxiliary inputs under which the prover cannot cheat. We construct AI-IV-PoQ from an auxiliary-input version of commitments in a similar way, showing that
> 
> If auxiliary-input one-way functions exist (which exist if \(\textbf{CZK}\not \subseteq \textbf{BPP}\)), then AI-IV-PoQ exist.
> 
> If auxiliary-input collision-resistant hash functions exist (which is equivalent to \(\textbf{PWPP}\nsubseteq \textbf{FBPP}\)) or \(\textbf{SZK}\nsubseteq \textbf{BPP}\), then constant-round AI-IV-PoQ exist.
> 
> Finally, we also show that some variants of PoQ can be constructed from quantum-evaluation one-way functions (QE-OWFs), which are similar to classically-secure classical one-way functions except that the evaluation algorithm is not classical but quantum. QE-OWFs appear to be weaker than classically-secure classical one-way functions, and therefore it demonstrates quantum advantage based on assumptions even weaker than one-way functions.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-68388-6_13](https://doi.org/10.1007/978-3-031-68388-6_13)
## On Sequential Functions and Fine-Grained Cryptography.
🌍 **[English](../../../docs/en/Crypto/Crypto[2024-5].md#on-sequential-functions-and-fine-grained-cryptography)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-5].md#on-sequential-functions-and-fine-grained-cryptography)
### Authors
* Jiaxin Guan, New York University, New York, NY, 10012, USA
* Hart Montgomery, Linux Foundation, San Francisco, CA, 94104, USA
### Abstract
> A sequential function is, informally speaking, a function f for which a massively parallel adversary cannot compute “substantially” faster than an honest user with limited parallel computation power. Sequential functions form the backbone of many primitives that are extensively used in blockchains such as verifiable delay functions (VDFs) and time-lock puzzles. Despite this widespread practical use, there has been little work studying the complexity or theory of sequential functions.
> 
> Our main result is a black-box oracle separation between sequential functions and one-way functions: in particular, we show the existence of an oracle \(\mathcal {O}\) that implies a sequential function but not a one-way function. This seems surprising since sequential functions are typically constructed from very strong assumptions that imply one-way functions and also since time-lock puzzles are known to imply one-way functions (Bitansky et al., ITCS ’16).
> 
> We continue our exploration of the theory of sequential functions. We show that, informally speaking, the decisional, worst-case variant of a certain class of sequential function called a continuous iterative sequential function (CISF) is PSPACE-complete. A CISF is, in a nutshell, a sequential function f that can be written in the form \(f \left( k, x \right) = g^{k} \left( x \right) \) for some function g where k is an input determining the number of “rounds” the function is evaluated. We then show that more general forms of sequential functions are not contained in PSPACE relative to a random oracle.
> 
> Given these results, we then ask if it is possible to build any interesting cryptographic primitives from sequential functions that are not one-way. It turns out that even if we assume just the existence of a CISF that is not one-way, we can build certain “fine-grained” cryptographic primitives where security is defined similarly to traditional primitives with the exception that it is only guaranteed for some (generally polynomial) amount of time. In particular, we show how to build “fine-grained” symmetric key encryption and “fine-grained” MACs from a CISF. We also show how to build fine-grained public-key encryption from a VDF with a few extra natural properties and indistinguishability obfuscation (iO) for null circuits. We do not assume one-way functions. Finally, we define a primitive that we call a commutative sequential function–essentially a sequential function that can be computed in sequence to get the same output in two different ways–and show that it implies fine-grained key exchange.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-68388-6_14](https://doi.org/10.1007/978-3-031-68388-6_14)
## Collision Resistance from Multi-collision Resistance for All Constant Parameters.
🌍 **[English](../../../docs/en/Crypto/Crypto[2024-5].md#collision-resistance-from-multi-collision-resistance-for-all-constant-parameters)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-5].md#collision-resistance-from-multi-collision-resistance-for-all-constant-parameters)
### Authors
* Jan Buzek, Paul G. Allen School of Computer Science & Engineering, University of Washington, Seattle, WA, USA
* Stefano Tessaro, Paul G. Allen School of Computer Science & Engineering, University of Washington, Seattle, WA, USA
### Abstract
> A t-multi-collision-resistant hash function (t-MCRH) is a family of shrinking functions for which it is computationally hard to find t distinct inputs mapped to the same output by a function sampled from this family. Several works have shown that t-MCRHs are sufficient for many of the applications of collision-resistant hash functions (CRHs), which correspond to the special case of \(t = 2\).
> 
> An important question is hence whether t-MCRHs for \(t > 2\) are fundamentally weaker objects than CRHs. As a first step towards resolving this question, Rothblum and Vasudevan (CRYPTO ’22) recently gave non-black-box constructions of infinitely-often secure CRHs from t-MCRHs for \(t \in \{3,4\}\) assuming the MCRH is sufficiently shrinking. Earlier on, Komargodski and Yogev (CRYPTO ’18) also showed that t-MCRHs for any constant t imply the weaker notion of a distributional CRH.
> 
> In this paper, we remove the limitations of prior works, and completely resolve the question of the power of t-MCRHs for constant t in the infinitely-often regime, showing that the existence of such a function family always implies the existence of an infinitely-often secure CRH. As in the works mentioned above, our proof is non-black-box and non-constructive. We further give a new domain extension result for MCRHs that enables us to show that the underlying MCRH need only have arbitrarily small linear shrinkage (mapping \((1 + \epsilon )n\) bits to n bits for any fixed \(\epsilon > 0\)) to imply the existence of CRHs.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-68388-6_15](https://doi.org/10.1007/978-3-031-68388-6_15)
## Structural Lower Bounds on Black-Box Constructions of Pseudorandom Functions.
🌍 **[English](../../../docs/en/Crypto/Crypto[2024-5].md#structural-lower-bounds-on-black-box-constructions-of-pseudorandom-functions)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-5].md#structural-lower-bounds-on-black-box-constructions-of-pseudorandom-functions)
### Authors
* Amos Beimel, Ben Gurion University, Be’er Sheva, Israel
* Tal Malkin, Columbia University, New York, USA
* Noam Mazor, Tel Aviv University, Tel Aviv, Israel
### Abstract
> We address the black-box complexity of constructing pseudorandom functions (PRF) from pseudorandom generators (PRG). The celebrated GGM construction of Goldreich, Goldwasser, and Micali (Crypto 1984) provides such a construction, which (even when combined with Levin’s domain-extension trick) has super-logarithmic depth. Despite many years and much effort, this remains essentially the best construction we have to date. On the negative side, one step is provided by the work of Miles and Viola (TCC 2011), which shows that a black-box construction which just calls the PRG once and outputs one of its output bits, cannot be a PRF.
> 
> In this work, we make significant further progress: we rule out black-box constructions of PRF from PRG that follow certain structural constraints, but may call the PRG adaptively polynomially many times. In particular, we define “tree constructions” which generalize the GGM structure: they apply the PRG G along a tree path, but allow for different choices of functions to compute the children of a node on the tree and to compute the next node on the computation path down the tree. We prove that a tree construction of logarithmic depth cannot be a PRF (while GGM is a tree construction of super-logarithmic depth). We also show several other results and discuss the special case of one-call constructions.
> 
> Our main results in fact rule out even weak PRF constructions with one output bit. We use the oracle separation methodology introduced by Gertner, Malkin, and Reingold (FOCS 2001), and show that for any candidate black-box construction \(F^G\) from G, there exists an oracle relative to which G is a PRG, but \(F^G\) is not a PRF.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-68388-6_16](https://doi.org/10.1007/978-3-031-68388-6_16)
## The One-Wayness of Jacobi Signatures.
🌍 **[English](../../../docs/en/Crypto/Crypto[2024-5].md#the-one-wayness-of-jacobi-signatures)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-5].md#the-one-wayness-of-jacobi-signatures)
### Authors
* Henry Corrigan-Gibbs, MIT, Cambridge, MA, USA
* David J. Wu, University of Texas at Austin, Austin, TX, USA
### Abstract
> We show that under a mild number-theoretic conjecture, recovering an integer from its Jacobi signature modulo \(N = p^2 q\), for primes p and q, is as hard as factoring N. This relates, for the first time, the one-wayness of a pseudorandom generator that Damgård proposed in 1988, to a standard number-theoretic problem. In addition, we show breaking the Jacobi pseudorandom function is no harder than factoring.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-68388-6_1](https://doi.org/10.1007/978-3-031-68388-6_1)
## Generic and Algebraic Computation Models: When AGM Proofs Transfer to the GGM.
🌍 **[English](../../../docs/en/Crypto/Crypto[2024-5].md#generic-and-algebraic-computation-models-when-agm-proofs-transfer-to-the-ggm)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-5].md#generic-and-algebraic-computation-models-when-agm-proofs-transfer-to-the-ggm)
### Authors
* Joseph Jaeger, School of Cybersecurity and Privacy, Georgia Institute of Technology, Atlanta, GA, USA
* Deep Inder Mohan, School of Cybersecurity and Privacy, Georgia Institute of Technology, Atlanta, GA, USA
### Abstract
> The Fuchsbauer, Kiltz, and Loss (Crypto 2018) claim that (some) hardness results in the algebraic group model imply the same hardness results in the generic group model was recently called into question by Katz, Zhang, and Zhou (Asiacrypt 2022). The latter gave an interpretation of the claim under which it is incorrect. We give an alternate interpretation under which it is correct, using natural frameworks for capturing generic and algebraic models for arbitrary algebraic structures. Most algebraic analyses in the literature can be captured by our frameworks, making the claim correct for them.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-68388-6_2](https://doi.org/10.1007/978-3-031-68388-6_2)
## Limits on the Power of Prime-Order Groups: Separating Q-Type from Static Assumptions.
🌍 **[English](../../../docs/en/Crypto/Crypto[2024-5].md#limits-on-the-power-of-prime-order-groups-separating-q-type-from-static-assumptions)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-5].md#limits-on-the-power-of-prime-order-groups-separating-q-type-from-static-assumptions)
### Authors
* George Lu, UT Austin, Austin, USA
* Mark Zhandry, NTT Research, Sunnyvale, USA
### Abstract
> Subgroup decision techniques on cryptographic groups and pairings have been critical for numerous applications. Originally conceived in the composite-order setting, there is a large body of work showing how to instantiate subgroup decision techniques in the prime-order setting as well. In this work, we demonstrate the first barrier to this research program, by demonstrating an important setting where composite-order techniques cannot be replicated in the prime-order setting.
> 
> In particular, we focus on the case of q-type assumptions, which are ubiquitous in group- and pairing-based cryptography, but unfortunately are less desirable than the more well-understood static assumptions. Subgroup decision techniques have had great success in removing q-type assumptions, even allowing q-type assumptions to be generically based on static assumptions on composite-order groups. Our main result shows that the same likely does not hold in the prime order setting. Namely, we show that a large class of q-type assumptions, including the security definition of a number of cryptosystems, cannot be proven secure in a black box way from any static assumption.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-68388-6_3](https://doi.org/10.1007/978-3-031-68388-6_3)
## QFESTA: Efficient Algorithms and Parameters for FESTA Using Quaternion Algebras.
🌍 **[English](../../../docs/en/Crypto/Crypto[2024-5].md#qfesta-efficient-algorithms-and-parameters-for-festa-using-quaternion-algebras)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-5].md#qfesta-efficient-algorithms-and-parameters-for-festa-using-quaternion-algebras)
### Authors
* Kohei Nakagawa, NTT Social Informatics Laboratories, Minato City, Japan
* Hiroshi Onuki, The University of Tokyo, Bunkyo City, Japan
### Abstract
> In 2023, Basso, Maino, and Pope proposed FESTA (Fast Encryption from Supersingular Torsion Attacks), an isogeny-based public-key encryption (PKE) protocol that uses the SIDH attack for decryption. In the same paper, they proposed parameters for that protocol, but the parameters require high-degree isogeny computations. In this paper, we introduce QFESTA (Quaternion Fast Encapsulation from Supersingular Torsion Attacks), a new variant of FESTA that works with better parameters using quaternion algebras and achieves IND-CCA security under QROM. To realize our protocol, we construct a new algorithm to compute an isogeny of non-smooth degree using quaternion algebras and the SIDH attack. Our protocol relies solely on (2, 2)-isogeny and 3-isogeny computations, promising a substantial reduction in computational costs. In addition, our protocol has significantly smaller data sizes for public keys and ciphertexts, approximately half size of the original FESTA.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-68388-6_4](https://doi.org/10.1007/978-3-031-68388-6_4)
## Radical $\root N \of {\mathrm {\acute{e}lu}}$ Isogeny Formulae.
🌍 **[English](../../../docs/en/Crypto/Crypto[2024-5].md#radical-root-n-of-mathrm-acute-e-lu-isogeny-formulae)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-5].md#radical-root-n-of-mathrm-acute-e-lu-isogeny-formulae)
### Authors
* Thomas Decru, Université Libre de Bruxelles, Bruxelles, Belgium
### Abstract
> We provide explicit radical N-isogeny formulae for all odd integers N. The formulae are compact closed-form expressions which require one Nth root computation and \(\mathcal {O}(N)\) basic field operations. The formulae are highly efficient to compute a long chain of N-isogenies, and have the potential to be extremely beneficial for speeding up certain cryptographic protocols such as CSIDH. Unfortunately, the formulae are conjectured, but we provide ample supporting evidence which strongly suggests their correctness.
> 
> For CSIDH-512, we notice an additional 35% speed-up when using radical isogenies up to \(N=199\), compared to the work by Castryck, Decru, Houben and Vercauteren, which uses radical isogenies up to \(N=19\) only. The addition of our radical isogenies also speeds up the computation of larger class group actions in a comparable fashion.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-68388-6_5](https://doi.org/10.1007/978-3-031-68388-6_5)
## Cryptanalysis of Lattice-Based Sequentiality Assumptions and Proofs of Sequential Work.
🌍 **[English](../../../docs/en/Crypto/Crypto[2024-5].md#cryptanalysis-of-lattice-based-sequentiality-assumptions-and-proofs-of-sequential-work)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-5].md#cryptanalysis-of-lattice-based-sequentiality-assumptions-and-proofs-of-sequential-work)
### Authors
* Chris Peikert, Computer Science and Engineering, University of Michigan, Ann Arbor, USA
* Yi Tang, Computer Science and Engineering, University of Michigan, Ann Arbor, USA
### Abstract
> This work completely breaks the sequentiality assumption (and broad generalizations thereof) underlying the candidate lattice-based proof of sequential work (PoSW) recently proposed by Lai and Malavolta at CRYPTO 2023. In addition, it breaks an essentially identical variant of the PoSW, which differs from the original in only an arbitrary choice that is immaterial to the design and security proof (under the falsified assumption). This suggests that whatever security the original PoSW may have is fragile, and further motivates the search for a construction based on a sound lattice-based assumption.
> 
> Specifically, for sequentiality parameter T and SIS parameters \(n,q,m = n \log q\), the attack on the sequentiality assumption finds a solution of quasipolynomial norm \(m^{\lceil \log T\rceil }\) (or norm \(O\left( \sqrt{m}\right) ^{\lceil \log T\rceil }\) with high probability) in only logarithmic \(\tilde{O} _{n,q}(\log T)\) depth; this strongly falsifies the assumption that finding such a solution requires depth linear in T. (The \(\tilde{O} \) notation hides polylogarithmic factors in the variables appearing in its subscript.) Alternatively, the attack finds a solution of polynomial norm \(m^{1/\varepsilon }\) in depth \(\tilde{O} _{n,q}(T^{\varepsilon })\), for any constant \(\varepsilon > 0\). Similarly, the attack on the (slightly modified) PoSW constructs a valid proof in polylogarithmic \(\tilde{O} _{n,q}(\log ^2 T)\) depth, thus strongly falsifying the expectation that doing so requires linear sequential work.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-68388-6_6](https://doi.org/10.1007/978-3-031-68388-6_6)
## Memory-Sample Lower Bounds for LWE.
🌍 **[English](../../../docs/en/Crypto/Crypto[2024-5].md#memory-sample-lower-bounds-for-lwe)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-5].md#memory-sample-lower-bounds-for-lwe)
### Authors
* Mingqi Lu, Tsinghua University, Beijing, China
* Junzhao Yang, Tsinghua University, Beijing, China
### Abstract
> In this work, we show memory-sample lower bounds for the fundamental problem of learning with error (LWE). In this problem, a learner tries to learn a uniformly sampled \(x \sim \mathbb {Z}_q^n\) from a stream of inner products plus errors sampled from discrete Gaussians of scale \(\sigma \). Any learning algorithm requires either at least \(\varOmega (k^2 / \log (q / \sigma ))\) bits of memory, or at least \(2^{\varOmega (k)}\) many samples, where \(k = \varOmega (n \log (1 / (1 - \phi (q)/q)))\). This matches with the information-theoretic upper bound when q is prime. In addition to LWE, our bounds apply to a wide range of learning problems. Following the work of Garg, Raz, Tal [STOC 2018], we describe a learning problem by a learning matrix \(M :A \times X \rightarrow \{0, 1, \cdots , q-1\}\) together with an error matrix \(E\). The learner tries to learn \(x \sim X\) from a stream of samples, \((a_1, b_1), \cdots , (a_m, b_m)\), where for every i, \(a_i \sim A\), and \(b_i \leftarrow t\) with probability \(E_{M(a,x),t}\). We characterize the learning problems that can have memory-sample lower bounds as “q-balanced”, which is a generalization of the L2-extractor in [GRT18]. We also show a reduction from q-balanced to L2-extractor, which provides a general way to prove q-balanced and thus apply our bounds. Our proof builds on [GRT18] and the work of Garg, Kothari, Liu, Raz [APPROX/RANDOM 2021].

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-68388-6_7](https://doi.org/10.1007/978-3-031-68388-6_7)
## Improved Algorithms for Finding Fixed-Degree Isogenies Between Supersingular Elliptic Curves.
🌍 **[English](../../../docs/en/Crypto/Crypto[2024-5].md#improved-algorithms-for-finding-fixed-degree-isogenies-between-supersingular-elliptic-curves)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-5].md#improved-algorithms-for-finding-fixed-degree-isogenies-between-supersingular-elliptic-curves)
### Authors
* Benjamin Benčina, Royal Holloway, University of London, London, UK
* Péter Kutas, University of Birmingham, Birmingham, UK
* Christophe Petit, University of Birmingham, Birmingham, UK
* Charlotte Weitkämper, University of Birmingham, Birmingham, UK
* Péter Kutas, Eötvös Loránd University, Budapest, Hungary
* Charlotte Weitkämper, Eötvös Loránd University, Budapest, Hungary
* Simon-Philipp Merz, Applied Cryptography Group, ETH Zürich, Zürich, Switzerland
* Christophe Petit, Université libre de Bruxelles, Brussels, Belgium
* Miha Stopar, Université libre de Bruxelles, Brussels, Belgium
* Miha Stopar, Ethereum Foundation, Zug, Switzerland
### Abstract
> Finding isogenies between supersingular elliptic curves is a natural algorithmic problem which is known to be equivalent to computing the curves’ endomorphism rings.
> 
> When the isogeny is additionally required to have a specific known degree d, the problem appears to be somewhat different in nature, yet its hardness is also required for isogeny-based cryptography.
> 
> Let \(E_1,E_2\) be supersingular elliptic curves over \(\mathbb {F}_{p^2}\). We present improved classical and quantum algorithms that compute an isogeny of degree d between \(E_1\) and \(E_2\) if it exists. Let \(d \approx p^{1/2+ \epsilon }\) for some \(\epsilon >0\). Our essentially memory-free algorithms have better time complexity than meet-in-the-middle algorithms, which require exponential memory storage, in the range \(1/2\le \epsilon \le 3/4\) on a classical computer. For quantum computers, we improve the time complexity in the range \(0<\epsilon <5/2\).
> 
> Our strategy is to compute the endomorphism rings of both curves, compute the reduced norm form associated to \(\text {Hom}(E_1,E_2)\) and try to represent the integer d as a solution of this form. We present multiple approaches to solving this problem which combine guessing certain variables exhaustively (or use Grover’s search in the quantum case) with methods for solving quadratic Diophantine equations such as Cornacchia’s algorithm and multivariate variants of Coppersmith’s method. We provide implementations and experimental results for the different approaches. A solution to the norm form can then be efficiently translated to recover the sought-after isogeny using well-known techniques. As a consequence of our results we show that a recently introduced signature scheme from [3] does not reach NIST level I security.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-68388-6_8](https://doi.org/10.1007/978-3-031-68388-6_8)
## Traceable Secret Sharing: Strong Security and Efficient Constructions.
🌍 **[English](../../../docs/en/Crypto/Crypto[2024-5].md#traceable-secret-sharing-strong-security-and-efficient-constructions)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-5].md#traceable-secret-sharing-strong-security-and-efficient-constructions)
### Authors
* Dan Boneh, Stanford University, Stanford, CA, USA
* Aditi Partap, Stanford University, Stanford, CA, USA
* Lior Rotem, Stanford University, Stanford, CA, USA
### Abstract
> Suppose Alice uses a t-out-of-n secret sharing to store her secret key on n servers. Her secret key is protected as long as t of them do not collude. However, what if a less-than-t subset of the servers decides to offer the shares they have for sale? In this case, Alice should be able to hold them accountable, or else nothing prevents them from selling her shares. With this motivation in mind, Goyal, Song, and Srinivasan (CRYPTO 21) introduced the concept of traceable secret sharing. In such schemes, it is possible to provably trace the leaked secret shares back to the servers who leaked them. Goyal et al. presented the first construction of a traceable secret sharing scheme. However, secret shares in their construction are quadratic in the secret size, and their tracing algorithm is quite involved as it relies on Goldreich-Levin decoding.
> 
> In this work, we put forth new definitions and practical constructions for traceable secret sharing. In our model, some \(f < t\) servers output a reconstruction box R that may arbitrarily depend on their shares. Given additional \(t-f\) shares, R reconstructs and outputs the secret. The task is to trace R back to the corrupted servers given black-box access to R. Unlike Goyal et al., we do not assume that the tracing algorithm has any information on how the corrupted servers constructed R from the shares in their possession.
> 
> We then present two very efficient constructions of traceable secret sharing based on two classic secret sharing schemes. In both of our schemes, shares are only twice as large as the secret, improving over the quadratic overhead of Goyal et al. Our first scheme is obtained by presenting a new practical tracing algorithm for the widely-used Shamir secret sharing scheme. Our second construction is based on an extension of Blakley’s secret sharing scheme. Tracing in this scheme is optimally efficient, and requires just one successful query to R. We believe that our constructions are an important step towards bringing traceable secret-sharing schemes to practice. This work also raises several interesting open problems that we describe in the paper.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-68388-6_9](https://doi.org/10.1007/978-3-031-68388-6_9)
## Towards Breaking the Half-Barrier of Local Leakage-Resilient Shamir's Secret Sharing.
🌍 **[English](../../../docs/en/Crypto/Crypto[2024-5].md#towards-breaking-the-half-barrier-of-local-leakage-resilient-shamirs-secret-sharing)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-5].md#towards-breaking-the-half-barrier-of-local-leakage-resilient-shamirs-secret-sharing)
### Authors
* Hai H. Nguyen, Department of Computer Science, ETH Zurich, Zürich, Switzerland
### Abstract
> Advanced methods for repairing Reed-Solomon codes, exemplified by the work of Guruswami and Wooters (STOC 2016), can be exploited to launch local leakage attacks against Shamir secret-sharing schemes over characteristic-2 fields. Conversely, Benhamouda, Degwekar, Ishai, and Rabin (CRYPTO 2018) proved that high-threshold instances of Shamir’s secret sharing over prime fields are resilient to one-bit local leakage. Since then, extensive efforts have been made to lower the threshold. However, even for simple leakage such as quadratic residue, it remains uncertain whether Shamir’s scheme is leakage-resilient when the reconstruction threshold n is less than half the number of parties k. As highlighted by Maji, Paskin-Cherniavsky, Suad, and Wang (CRYPTO 2021), the common approach fails to establish the leakage resilience of Shamir’s scheme against quadratic residue leakage when \(k < n/2\). In many applications, the threshold must not exceed half the number of parties.
> 
> This work develops a new framework for studying the local leakage resilience of Shamir’s secret sharing over a finite field of prime order p. Our work demonstrates that Shamir secret sharing remains leakage resilient against almost all 1-bit local leakages, including quadratic residue leakage, even when \(k = cn\) for any constant c, provided the prime field is sufficiently large. This result extends to any MDS code-based secret sharing.
> 
> For the hardness of computation, we propose an explicit 2-bit leakage attack capable of determining the secret in Shamir secret sharing with a reconstruction threshold \(k = O(\sqrt{n})\) when \(p = \varTheta (n)\). Our attack translates into a repairing algorithm for Reed-Solomon codes.
> 
> Technically, our framework relies on additive combinatorics and character sums, specifically higher-order Fourier analysis. These connections may be of independent interest.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-68388-6_10](https://doi.org/10.1007/978-3-031-68388-6_10)
## Stochastic Secret Sharing with 1-Bit Shares and Applications to MPC.
🌍 **[English](../../../docs/en/Crypto/Crypto[2024-5].md#stochastic-secret-sharing-with-1-bit-shares-and-applications-to-mpc)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-5].md#stochastic-secret-sharing-with-1-bit-shares-and-applications-to-mpc)
### Authors
* Benny Applebaum, Tel-Aviv University, Tel-Aviv, Israel
* Eliran Kachlon, Tel-Aviv University, Tel-Aviv, Israel
### Abstract
> The problem of minimizing the share size of threshold secret-sharing schemes is a basic research question that has been extensively studied. Ideally, one strives for schemes in which the share size equals the secret size. While this is achievable for large secrets (Shamir, CACM ’79), no similar solutions are known for the case of binary, single-bit secrets. Current approaches often rely on so-called ramp secret sharing that achieves a constant share size at the expense of a slight gap between the privacy and the correctness thresholds. In the case of single-bit shares, this leads to a large gap which is typically unacceptable. The possibility of a meaningful notion of secret sharing scheme with 1-bit shares and almost optimal threshold has been left wide open. Of special interest is the case of threshold 0.5, which is motivated by information-theoretic honest-majority secure multiparty computation (MPC).
> 
> In this work, we present a new stochastic model for secret-sharing where each party is corrupted by the adversary with probability p, independently of the other parties, and correctness and privacy are required to hold with high probability over the choice of the corrupt parties. We present new secret sharing schemes with single-bit shares that tolerate any constant corruption probability \(p<0.5\). Our construction is based on a novel connection between such stochastic secret-sharing schemes and error-correcting codes that achieve capacity over the binary erasure channel.
> 
> Our schemes are linear and multiplicative. We demonstrate the usefulness of the model by using our new schemes to construct MPC protocols with security against an adversary that passively corrupts an arbitrary subset of 0.499n of the parties, where the online communication per party consists of a single bit per AND gate and zero communication per XOR gate. Unlike competing approaches for communication-efficient MPC, our solution is applicable even in a real-time model in which the parties should compute a Boolean circuit whose gates arrive in real-time, one at a time, and are not known in advance.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-68388-6_11](https://doi.org/10.1007/978-3-031-68388-6_11)
## Sometimes You Can't Distribute Random-Oracle-Based Proofs.
🌍 **[English](../../../docs/en/Crypto/Crypto[2024-5].md#sometimes-you-cant-distribute-random-oracle-based-proofs)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-5].md#sometimes-you-cant-distribute-random-oracle-based-proofs)
### Authors
* Jack Doerner, Brown University, Providence, USA
* Leah Namisa Rosenbloom, Brown University, Providence, USA
* Jack Doerner, Technion, Haifa, Israel
* Jack Doerner, Reichman University, Herzliya, Israel
* Yashvanth Kondi, Silence Labs (Deel), San Francisco, USA
### Abstract
> We investigate the conditions under which straight-line extractable NIZKs in the random oracle model (i.e. without a CRS) permit multiparty realizations that are black-box in the same random oracle. We show that even in the semi-honest setting, any MPC protocol to compute such a NIZK cannot make black-box use of the random oracle or a hash function instantiating it if security against all-but-one corruptions is desired, unless the number of queries made by the verifier to the oracle grows linearly with the number of parties. This presents a fundamental barrier to constructing efficient protocols to securely distribute the computation of NIZKs (and signatures) based on MPC-in-the-head, PCPs/IOPs, and sigma protocols compiled with transformations due to Fischlin, Pass, or Unruh.
> 
> When the adversary is restricted to corrupt only a constant fraction of parties, we give a positive result by means of a tailored construction, which demonstrates that our impossibility does not extend to weaker corruption models in general.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-68388-6_12](https://doi.org/10.1007/978-3-031-68388-6_12)
## Quantum Advantage from One-Way Functions.
🌍 **[English](../../../docs/en/Crypto/Crypto[2024-5].md#quantum-advantage-from-one-way-functions)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-5].md#quantum-advantage-from-one-way-functions)
### Authors
* Tomoyuki Morimae, Yukawa Institute for Theoretical Physics, Kyoto University, Kyoto, Japan
* Takashi Yamakawa, Yukawa Institute for Theoretical Physics, Kyoto University, Kyoto, Japan
* Takashi Yamakawa, NTT Social Informatics Laboratories, Tokyo, Japan
* Takashi Yamakawa, NTT Research Center for Theoretical Quantum Information, Atsugi, Japan
### Abstract
> Is quantum computing truly faster than classical computing? Demonstrating unconditional quantum computational advantage lies beyond the reach of the current complexity theory, and therefore we have to rely on some complexity assumptions. While various results on quantum advantage have been obtained, all necessitate relatively stronger or less standard assumptions in complexity theory or classical cryptography. In this paper, we show quantum advantage based on several fundamental assumptions, specifically relying solely on the existence of classically-secure one-way functions. Given the fact that one-way functions are necessary for almost all classical cryptographic primitives, our findings yield a surprising implication: if there is no quantum advantage, then there is no classical cryptography! More precisely, we introduce inefficient-verifier proofs of quantumness (IV-PoQ), and construct it from statistically-hiding and computationally-binding classical bit commitments. IV-PoQ is an interactive protocol between a verifier and a quantum polynomial-time prover consisting of two phases. In the first phase, the verifier is classical probabilistic polynomial-time, and it interacts with the quantum polynomial-time prover over a classical channel. In the second phase, the verifier becomes inefficient, and makes its decision based on the transcript of the first phase. If the quantum prover is honest, the inefficient verifier accepts with high probability, but any classical probabilistic polynomial-time malicious prover only has a small probability of being accepted by the inefficient verifier. In our construction, the inefficient verifier can be a classical deterministic polynomial-time algorithm that queries an \(\textbf{NP}\) oracle. Our construction demonstrates the following results based on the known constructions of statistically-hiding and computationally-binding commitments from one-way functions or distributional collision-resistant hash functions:
> 
> If one-way functions exist, then IV-PoQ exist.
> 
> If distributional collision-resistant hash functions exist (which exist if hard-on-average problems in \(\textbf{SZK}\) exist), then constant-round IV-PoQ exist.
> 
> We also demonstrate quantum advantage based on worst-case-hard assumptions. We define auxiliary-input IV-PoQ (AI-IV-PoQ) that only require that for any malicious prover, there exist infinitely many auxiliary inputs under which the prover cannot cheat. We construct AI-IV-PoQ from an auxiliary-input version of commitments in a similar way, showing that
> 
> If auxiliary-input one-way functions exist (which exist if \(\textbf{CZK}\not \subseteq \textbf{BPP}\)), then AI-IV-PoQ exist.
> 
> If auxiliary-input collision-resistant hash functions exist (which is equivalent to \(\textbf{PWPP}\nsubseteq \textbf{FBPP}\)) or \(\textbf{SZK}\nsubseteq \textbf{BPP}\), then constant-round AI-IV-PoQ exist.
> 
> Finally, we also show that some variants of PoQ can be constructed from quantum-evaluation one-way functions (QE-OWFs), which are similar to classically-secure classical one-way functions except that the evaluation algorithm is not classical but quantum. QE-OWFs appear to be weaker than classically-secure classical one-way functions, and therefore it demonstrates quantum advantage based on assumptions even weaker than one-way functions.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-68388-6_13](https://doi.org/10.1007/978-3-031-68388-6_13)
## On Sequential Functions and Fine-Grained Cryptography.
🌍 **[English](../../../docs/en/Crypto/Crypto[2024-5].md#on-sequential-functions-and-fine-grained-cryptography)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-5].md#on-sequential-functions-and-fine-grained-cryptography)
### Authors
* Jiaxin Guan, New York University, New York, NY, 10012, USA
* Hart Montgomery, Linux Foundation, San Francisco, CA, 94104, USA
### Abstract
> A sequential function is, informally speaking, a function f for which a massively parallel adversary cannot compute “substantially” faster than an honest user with limited parallel computation power. Sequential functions form the backbone of many primitives that are extensively used in blockchains such as verifiable delay functions (VDFs) and time-lock puzzles. Despite this widespread practical use, there has been little work studying the complexity or theory of sequential functions.
> 
> Our main result is a black-box oracle separation between sequential functions and one-way functions: in particular, we show the existence of an oracle \(\mathcal {O}\) that implies a sequential function but not a one-way function. This seems surprising since sequential functions are typically constructed from very strong assumptions that imply one-way functions and also since time-lock puzzles are known to imply one-way functions (Bitansky et al., ITCS ’16).
> 
> We continue our exploration of the theory of sequential functions. We show that, informally speaking, the decisional, worst-case variant of a certain class of sequential function called a continuous iterative sequential function (CISF) is PSPACE-complete. A CISF is, in a nutshell, a sequential function f that can be written in the form \(f \left( k, x \right) = g^{k} \left( x \right) \) for some function g where k is an input determining the number of “rounds” the function is evaluated. We then show that more general forms of sequential functions are not contained in PSPACE relative to a random oracle.
> 
> Given these results, we then ask if it is possible to build any interesting cryptographic primitives from sequential functions that are not one-way. It turns out that even if we assume just the existence of a CISF that is not one-way, we can build certain “fine-grained” cryptographic primitives where security is defined similarly to traditional primitives with the exception that it is only guaranteed for some (generally polynomial) amount of time. In particular, we show how to build “fine-grained” symmetric key encryption and “fine-grained” MACs from a CISF. We also show how to build fine-grained public-key encryption from a VDF with a few extra natural properties and indistinguishability obfuscation (iO) for null circuits. We do not assume one-way functions. Finally, we define a primitive that we call a commutative sequential function–essentially a sequential function that can be computed in sequence to get the same output in two different ways–and show that it implies fine-grained key exchange.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-68388-6_14](https://doi.org/10.1007/978-3-031-68388-6_14)
## Collision Resistance from Multi-collision Resistance for All Constant Parameters.
🌍 **[English](../../../docs/en/Crypto/Crypto[2024-5].md#collision-resistance-from-multi-collision-resistance-for-all-constant-parameters)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-5].md#collision-resistance-from-multi-collision-resistance-for-all-constant-parameters)
### Authors
* Jan Buzek, Paul G. Allen School of Computer Science & Engineering, University of Washington, Seattle, WA, USA
* Stefano Tessaro, Paul G. Allen School of Computer Science & Engineering, University of Washington, Seattle, WA, USA
### Abstract
> A t-multi-collision-resistant hash function (t-MCRH) is a family of shrinking functions for which it is computationally hard to find t distinct inputs mapped to the same output by a function sampled from this family. Several works have shown that t-MCRHs are sufficient for many of the applications of collision-resistant hash functions (CRHs), which correspond to the special case of \(t = 2\).
> 
> An important question is hence whether t-MCRHs for \(t > 2\) are fundamentally weaker objects than CRHs. As a first step towards resolving this question, Rothblum and Vasudevan (CRYPTO ’22) recently gave non-black-box constructions of infinitely-often secure CRHs from t-MCRHs for \(t \in \{3,4\}\) assuming the MCRH is sufficiently shrinking. Earlier on, Komargodski and Yogev (CRYPTO ’18) also showed that t-MCRHs for any constant t imply the weaker notion of a distributional CRH.
> 
> In this paper, we remove the limitations of prior works, and completely resolve the question of the power of t-MCRHs for constant t in the infinitely-often regime, showing that the existence of such a function family always implies the existence of an infinitely-often secure CRH. As in the works mentioned above, our proof is non-black-box and non-constructive. We further give a new domain extension result for MCRHs that enables us to show that the underlying MCRH need only have arbitrarily small linear shrinkage (mapping \((1 + \epsilon )n\) bits to n bits for any fixed \(\epsilon > 0\)) to imply the existence of CRHs.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-68388-6_15](https://doi.org/10.1007/978-3-031-68388-6_15)
## Structural Lower Bounds on Black-Box Constructions of Pseudorandom Functions.
🌍 **[English](../../../docs/en/Crypto/Crypto[2024-5].md#structural-lower-bounds-on-black-box-constructions-of-pseudorandom-functions)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-5].md#structural-lower-bounds-on-black-box-constructions-of-pseudorandom-functions)
### Authors
* Amos Beimel, Ben Gurion University, Be’er Sheva, Israel
* Tal Malkin, Columbia University, New York, USA
* Noam Mazor, Tel Aviv University, Tel Aviv, Israel
### Abstract
> We address the black-box complexity of constructing pseudorandom functions (PRF) from pseudorandom generators (PRG). The celebrated GGM construction of Goldreich, Goldwasser, and Micali (Crypto 1984) provides such a construction, which (even when combined with Levin’s domain-extension trick) has super-logarithmic depth. Despite many years and much effort, this remains essentially the best construction we have to date. On the negative side, one step is provided by the work of Miles and Viola (TCC 2011), which shows that a black-box construction which just calls the PRG once and outputs one of its output bits, cannot be a PRF.
> 
> In this work, we make significant further progress: we rule out black-box constructions of PRF from PRG that follow certain structural constraints, but may call the PRG adaptively polynomially many times. In particular, we define “tree constructions” which generalize the GGM structure: they apply the PRG G along a tree path, but allow for different choices of functions to compute the children of a node on the tree and to compute the next node on the computation path down the tree. We prove that a tree construction of logarithmic depth cannot be a PRF (while GGM is a tree construction of super-logarithmic depth). We also show several other results and discuss the special case of one-call constructions.
> 
> Our main results in fact rule out even weak PRF constructions with one output bit. We use the oracle separation methodology introduced by Gertner, Malkin, and Reingold (FOCS 2001), and show that for any candidate black-box construction \(F^G\) from G, there exists an oracle relative to which G is a PRG, but \(F^G\) is not a PRF.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-68388-6_16](https://doi.org/10.1007/978-3-031-68388-6_16)
