# Crypto[2020-2]
## A Polynomial-Time Algorithm for Solving the Hidden Subset Sum Problem.
🌍 **[English](../../../docs/en/Crypto/Crypto[2020-2].md#a-polynomial-time-algorithm-for-solving-the-hidden-subset-sum-problem)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2020-2].md#a-polynomial-time-algorithm-for-solving-the-hidden-subset-sum-problem)
### Authors
* Jean-Sébastien Coron, University of Luxembourg, Esch-sur-Alzette, Luxembourg
* Agnese Gini, University of Luxembourg, Esch-sur-Alzette, Luxembourg
### Abstract
> At Crypto ’99, Nguyen and Stern described a lattice based algorithm for solving the hidden subset sum problem, a variant of the classical subset sum problem where the n weights are also hidden. While the Nguyen-Stern algorithm works quite well in practice for moderate values of n, we argue that its complexity is actually exponential in n; namely in the final step one must recover a very short basis of a n-dimensional lattice, which takes exponential-time in n, as one must apply BKZ reduction with increasingly large block-sizes.
> 
> In this paper, we describe a variant of the Nguyen-Stern algorithm that works in polynomial-time. The first step is the same orthogonal lattice attack with LLL as in the original algorithm. In the second step, instead of applying BKZ, we use a multivariate technique that recovers the short lattice vectors and finally the hidden secrets in polynomial time. Our algorithm works quite well in practice, as we can reach \(n \simeq 250\) in a few hours on a single PC.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-56880-1_1](https://doi.org/10.1007/978-3-030-56880-1_1)
## Asymptotic Complexities of Discrete Logarithm Algorithms in Pairing-Relevant Finite Fields.
🌍 **[English](../../../docs/en/Crypto/Crypto[2020-2].md#asymptotic-complexities-of-discrete-logarithm-algorithms-in-pairing-relevant-finite-fields)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2020-2].md#asymptotic-complexities-of-discrete-logarithm-algorithms-in-pairing-relevant-finite-fields)
### Authors
* Gabrielle De Micheli, Université de Lorraine, CNRS, Inria, LORIA, Nancy, France
* Pierrick Gaudry, Université de Lorraine, CNRS, Inria, LORIA, Nancy, France
* Cécile Pierrot, Université de Lorraine, CNRS, Inria, LORIA, Nancy, France
### Abstract
> We study the discrete logarithm problem at the boundary case between small and medium characteristic finite fields, which is precisely the area where finite fields used in pairing-based cryptosystems live. In order to evaluate the security of pairing-based protocols, we thoroughly analyze the complexity of all the algorithms that coexist at this boundary case: the Quasi-Polynomial algorithms, the Number Field Sieve and its many variants, and the Function Field Sieve. We adapt the latter to the particular case where the extension degree is composite, and show how to lower the complexity by working in a shifted function field. All this study finally allows us to give precise values for the characteristic asymptotically achieving the highest security level for pairings. Surprisingly enough, there exist special characteristics that are as secure as general ones.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-56880-1_2](https://doi.org/10.1007/978-3-030-56880-1_2)
## Comparing the Difficulty of Factorization and Discrete Logarithm: A 240-Digit Experiment.
🌍 **[English](../../../docs/en/Crypto/Crypto[2020-2].md#comparing-the-difficulty-of-factorization-and-discrete-logarithm-a-240-digit-experiment)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2020-2].md#comparing-the-difficulty-of-factorization-and-discrete-logarithm-a-240-digit-experiment)
### Authors
* Fabrice Boudot, Université de Limoges, XLIM, UMR 7252, F-87000, Limoges, France
* Pierrick Gaudry, Université de Lorraine, CNRS, Inria, LORIA, F-54000, Nancy, France
* Aurore Guillevic, Université de Lorraine, CNRS, Inria, LORIA, F-54000, Nancy, France
* Emmanuel Thomé, Université de Lorraine, CNRS, Inria, LORIA, F-54000, Nancy, France
* Paul Zimmermann, Université de Lorraine, CNRS, Inria, LORIA, F-54000, Nancy, France
* Nadia Heninger, University of California, San Diego, USA
### Abstract
> We report on two new records: the factorization of RSA-240, a 795-bit number, and a discrete logarithm computation over a 795-bit prime field. Previous records were the factorization of RSA-768 in 2009 and a 768-bit discrete logarithm computation in 2016. Our two computations at the 795-bit level were done using the same hardware and software, and show that computing a discrete logarithm is not much harder than a factorization of the same size. Moreover, thanks to algorithmic variants and well-chosen parameters, our computations were significantly less expensive than anticipated based on previous records.
> 
> The last page of this paper also reports on the factorization of RSA-250.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-56880-1_3](https://doi.org/10.1007/978-3-030-56880-1_3)
## Breaking the Decisional Diffie-Hellman Problem for Class Group Actions Using Genus Theory.
🌍 **[English](../../../docs/en/Crypto/Crypto[2020-2].md#breaking-the-decisional-diffie-hellman-problem-for-class-group-actions-using-genus-theory)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2020-2].md#breaking-the-decisional-diffie-hellman-problem-for-class-group-actions-using-genus-theory)
### Authors
* Wouter Castryck, imec-COSIC, KU Leuven, Leuven, Belgium
* Frederik Vercauteren, imec-COSIC, KU Leuven, Leuven, Belgium
* Jana Sotáková, QuSoft/University of Amsterdam, Amsterdam, The Netherlands
### Abstract
> In this paper, we use genus theory to analyze the hardness of the decisional Diffie–Hellman problem (DDH) for ideal class groups of imaginary quadratic orders, acting on sets of elliptic curves through isogenies; such actions are used in the Couveignes–Rostovtsev–Stolbunov protocol and in CSIDH. Concretely, genus theory equips every imaginary quadratic order \(\mathcal {O}\) with a set of assigned characters \(\chi : {\text {cl}}(\mathcal {O}) \rightarrow \{ \pm 1\}\), and for each such character and every secret ideal class \([\mathfrak {a}]\) connecting two public elliptic curves E and \(E' = [\mathfrak {a}] \star E\), we show how to compute \(\chi ([\mathfrak {a}])\) given only E and \(E'\), i.e. without knowledge of \([\mathfrak {a}]\). In practice, this breaks DDH as soon as the class number is even, which is true for a density 1 subset of all imaginary quadratic orders. For instance, our attack works very efficiently for all supersingular elliptic curves over \(\mathbb {F}_p\) with \(p \equiv 1 \bmod 4\). Our method relies on computing Tate pairings and walking down isogeny volcanoes.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-56880-1_4](https://doi.org/10.1007/978-3-030-56880-1_4)
## A Classification of Computational Assumptions in the Algebraic Group Model.
🌍 **[English](../../../docs/en/Crypto/Crypto[2020-2].md#a-classification-of-computational-assumptions-in-the-algebraic-group-model)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2020-2].md#a-classification-of-computational-assumptions-in-the-algebraic-group-model)
### Authors
* Balthazar Bauer, Inria, ENS, CNRS, PSL, Paris, France
* Georg Fuchsbauer, TU Wien, Vienna, Austria
* Julian Loss, University of Maryland, College Park, USA
### Abstract
> We give a taxonomy of computational assumptions in the algebraic group model (AGM). We first analyze Boyen’s Uber assumption family for bilinear groups and then extend it in several ways to cover assumptions as diverse as Gap Diffie-Hellman and LRSW. We show that in the AGM every member of these families is implied by the q-discrete logarithm (DL) assumption, for some q that depends on the degrees of the polynomials defining the Uber assumption.
> 
> Using the meta-reduction technique, we then separate \((q+1)\)-DL from q-DL, which yields a classification of all members of the extended Uber-assumption families. We finally show that there are strong assumptions, such as one-more DL, that provably fall outside our classification, by proving that they cannot be reduced from q-DL even in the AGM.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-56880-1_5](https://doi.org/10.1007/978-3-030-56880-1_5)
## Fast Reduction of Algebraic Lattices over Cyclotomic Fields.
🌍 **[English](../../../docs/en/Crypto/Crypto[2020-2].md#fast-reduction-of-algebraic-lattices-over-cyclotomic-fields)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2020-2].md#fast-reduction-of-algebraic-lattices-over-cyclotomic-fields)
### Authors
* Paul Kirchner, Rennes Univ., IRISA/CNRS France, Rennes, France
* Thomas Espitau, Rennes Univ., IRISA/CNRS France, Rennes, France
* Pierre-Alain Fouque, Rennes Univ., IRISA/CNRS France, Rennes, France
* Thomas Espitau, NTT Corp. Secure Plateform Laboratories, Rennes, France
### Abstract
> We describe two very efficient polynomial-time algorithms for reducing module lattices defined over arbitrary cyclotomic fields that solve the \(\gamma \)-Hermite Module-SVP problem. They both exploit the structure of tower fields and the second one also uses the symplectic geometry existing in these fields. We conjecture that a rank-2 module over a cyclotomic field of degree n with B-bit coefficients can be heuristically reduced within approximation factor \(2^{\widetilde{\text {O}}\left( n\right) }\) in time \(\widetilde{\text {O}}\left( n^2B\right) \). In the symplectic algorithm, if the condition number C of the input matrix is large enough, this complexity shrinks to \(\widetilde{\text {O}}\left( n^{\log _2 3}C\right) \). In cryptography, matrices are well-conditioned and we can take \(C=B\), but in the worst case, C can be as large as nB. This last result is particularly striking as for some matrices, we can go below the \(n^2B\) swaps lower bound given by the analysis of LLL based on the potential. These algorithms are parallel and we provide a full implementation. We apply them on multilinear cryptographic concrete parameters by reducing matrices of dimension 4096 with 6675-bit integers in 4 days. Finally, we give a quasicubic time for the Gentry-Szydlo algorithm and run it in dimension 1024. It requires efficient ideal multiplications which need fast lattice reductions.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-56880-1_6](https://doi.org/10.1007/978-3-030-56880-1_6)
## Faster Enumeration-Based Lattice Reduction: Root Hermite Factor k1/(2k) Time kk/8+o(k).
🌍 **[English](../../../docs/en/Crypto/Crypto[2020-2].md#faster-enumeration-based-lattice-reduction-root-hermite-factor-k1-2k-time-kk-8-o-k)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2020-2].md#faster-enumeration-based-lattice-reduction-root-hermite-factor-k1-2k-time-kk-8-o-k)
### Authors
* Martin R. Albrecht, Information Security Group, Royal Holloway, University of London, Egham, England
* Shi Bai, Department of Mathematical Sciences, Florida Atlantic University, Boca Raton, USA
* Pierre-Alain Fouque, Univ. Rennes, CNRS, IRISA, Rennes, France
* Paul Kirchner, Univ. Rennes, CNRS, IRISA, Rennes, France
* Weiqiang Wen, Univ. Rennes, CNRS, IRISA, Rennes, France
* Damien Stehlé, Univ. Lyon, EnsL, UCBL, CNRS, Inria, LIP, 69342, Lyon Cedex 07, France
* Damien Stehlé, Institut Universitaire de France, Paris, France
### Abstract
> We give a lattice reduction algorithm that achieves root Hermite factor \(k^{1/(2k)}\) in time \(k^{k/8+o(k)}\) and polynomial memory. This improves on the previously best known enumeration-based algorithms which achieve the same quality, but in time \(k^{k/(2e) + o(k)}\). A cost of \(k^{k/8 + o(k)}\) was previously mentioned as potentially achievable (Hanrot-Stehlé’10) or as a heuristic lower bound (Nguyen’10) for enumeration algorithms. We prove the complexity and quality of our algorithm under a heuristic assumption and provide empirical evidence from simulation and implementation experiments attesting to its performance for practical and cryptographic parameter sizes. Our work also suggests potential avenues for achieving costs below \(k^{k/8 + o(k)}\) for the same root Hermite factor, based on the geometry of SDBKZ-reduced bases.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-56880-1_7](https://doi.org/10.1007/978-3-030-56880-1_7)
## Lattice Reduction for Modules, or How to Reduce ModuleSVP to ModuleSVP.
🌍 **[English](../../../docs/en/Crypto/Crypto[2020-2].md#lattice-reduction-for-modules-or-how-to-reduce-modulesvp-to-modulesvp)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2020-2].md#lattice-reduction-for-modules-or-how-to-reduce-modulesvp-to-modulesvp)
### Authors
* Tamalika Mukherjee, Purdue University, West Lafayette, USA
* Noah Stephens-Davidowitz, Cornell University, Ithaca, USA
### Abstract
> This is the extended abstract of [MS20]. See the full version at eprint:2019/1142.
> 
> We show how to generalize lattice reduction algorithms to module lattices. Specifically, we reduce \(\gamma \)-approximate ModuleSVP over module lattices with rank \(k \ge 2\) to \(\gamma '\)-approximate ModuleSVP over module lattices with rank \(2 \le \beta \le k\). To do so, we modify the celebrated slide-reduction algorithm of Gama and Nguyen to work with module filtrations, a high-dimensional generalization of the (\(\mathbb {Z}\)-)basis of a lattice.
> 
> The particular value of \(\gamma \) that we achieve depends on the underlying number field K, the order \(R \subseteq \mathcal {O}_K\), and the embedding (as well as, of course, k and \(\beta \)). However, for reasonable choices of these parameters, the resulting value of \(\gamma \) is surprisingly close to the one achieved by “plain” lattice reduction algorithms, which require an arbitrary SVP oracle in the same dimension. In other words, we show that ModuleSVP oracles are nearly as useful as SVP oracles for solving higher-rank instances of approximate ModuleSVP.
> 
> Our result generalizes the recent independent result of Lee, Pellet-Mary, Stehlé, and Wallet, which works in the important special case when \(\beta = 2\) and \(R = \mathcal {O}_K\) is the ring of integers of K under the canonical embedding, while our reduction works. Indeed, at a high level our reduction can be thought of as a generalization of theirs in roughly the same way that block reduction generalizes LLL reduction.
> 
> In this extended abstract, we present a special case of the more general result to appear in the full version [MS20].

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-56880-1_8](https://doi.org/10.1007/978-3-030-56880-1_8)
## Random Self-reducibility of Ideal-SVP via Arakelov Random Walks.
🌍 **[English](../../../docs/en/Crypto/Crypto[2020-2].md#random-self-reducibility-of-ideal-svp-via-arakelov-random-walks)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2020-2].md#random-self-reducibility-of-ideal-svp-via-arakelov-random-walks)
### Authors
* Koen de Boer, Cryptology Group, CWI, Amsterdam, The Netherlands
* Léo Ducas, Cryptology Group, CWI, Amsterdam, The Netherlands
* Alice Pellet-Mary, imec-COSIC, KU Leuven, Leuven, Belgium
* Benjamin Wesolowski, Univ. Bordeaux, CNRS, Bordeaux INP, IMB, UMR 5251, 33400, Talence, France
* Benjamin Wesolowski, INRIA, IMB, UMR 5251, 33400, Talence, France
### Abstract
> Fixing a number field, the space of all ideal lattices, up to isometry, is naturally an abelian group, called the Arakelov class group. This fact, well known to number theorists, has so far not been explicitly used in the literature on lattice-based cryptography. Remarkably, the Arakelov class group is a combination of two groups that have already led to significant cryptanalytic advances: the class group and the unit torus.
> 
> In the present article, we show that the Arakelov class group has more to offer. We start with the development of a new versatile tool: we prove that, subject to the Riemann Hypothesis for Hecke L-functions, certain random walks on the Arakelov class group have a rapid mixing property. We then exploit this result to relate the average-case and the worst-case of the Shortest Vector Problem in ideal lattices. Our reduction appears particularly sharp: for Hermite-SVP in ideal lattices of certain cyclotomic number fields, it loses no more than a \(\tilde{O}(\sqrt{n})\) factor on the Hermite approximation factor.
> 
> Furthermore, we suggest that this rapid-mixing theorem should find other applications in cryptography and in algorithmic number theory.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-56880-1_9](https://doi.org/10.1007/978-3-030-56880-1_9)
## Slide Reduction, Revisited - Filling the Gaps in SVP Approximation.
🌍 **[English](../../../docs/en/Crypto/Crypto[2020-2].md#slide-reduction-revisited-filling-the-gaps-in-svp-approximation)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2020-2].md#slide-reduction-revisited-filling-the-gaps-in-svp-approximation)
### Authors
* Divesh Aggarwal, National University of Singapore, Singapore, Singapore
* Jianwei Li, Information Security Group, Royal Holloway, University of London, Egham, UK
* Phong Q. Nguyen, Inria, Paris, France
* Phong Q. Nguyen, Département d’informatique de l’ENS, ENS, CNRS, PSL University, Paris, France
* Noah Stephens-Davidowitz, Cornell University, Ithaca, USA
### Abstract
> We show how to generalize Gama and Nguyen’s slide reduction algorithm [STOC ’08] for solving the approximate Shortest Vector Problem over lattices (SVP) to allow for arbitrary block sizes, rather than just block sizes that divide the rank n of the lattice. This leads to significantly better running times for most approximation factors. We accomplish this by combining slide reduction with the DBKZ algorithm of Micciancio and Walter [Eurocrypt ’16].
> 
> We also show a different algorithm that works when the block size is quite large—at least half the total rank. This yields the first non-trivial algorithm for sublinear approximation factors.
> 
> Together with some additional optimizations, these results yield significantly faster provably correct algorithms for \(\delta \)-approximate SVP for all approximation factors \(n^{1/2+\varepsilon } \le \delta \le n^{O(1)}\), which is the regime most relevant for cryptography. For the specific values of \(\delta = n^{1-\varepsilon }\) and \(\delta = n^{2-\varepsilon }\), we improve the exponent in the running time by a factor of 2 and a factor of 1.5 respectively.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-56880-1_10](https://doi.org/10.1007/978-3-030-56880-1_10)
## Rounding in the Rings.
🌍 **[English](../../../docs/en/Crypto/Crypto[2020-2].md#rounding-in-the-rings)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2020-2].md#rounding-in-the-rings)
### Authors
* Feng-Hao Liu, Florida Atlantic University, Boca Raton, FL, USA
* Zhedong Wang, Florida Atlantic University, Boca Raton, FL, USA
### Abstract
> In this work, we conduct a comprehensive study on establishing hardness reductions for (Module) Learning with Rounding over rings (RLWR). Towards this, we present an algebraic framework of LWR, inspired by a recent work of Peikert and Pepin (TCC ’19). Then we show a search-to-decision reduction for Ring-LWR, generalizing a result in the plain LWR setting by Bogdanov et al. (TCC ’15). Finally, we show a reduction from Ring-LWE to Module Ring-LWR (even for leaky secrets), generalizing the plain LWE to LWR reduction by Alwen et al. (Crypto ’13). One of our central techniques is a new ring leftover hash lemma, which might be of independent interests.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-56880-1_11](https://doi.org/10.1007/978-3-030-56880-1_11)
## LWE with Side Information: Attacks and Concrete Security Estimation.
🌍 **[English](../../../docs/en/Crypto/Crypto[2020-2].md#lwe-with-side-information-attacks-and-concrete-security-estimation)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2020-2].md#lwe-with-side-information-attacks-and-concrete-security-estimation)
### Authors
* Dana Dachman-Soled, University of Maryland, College Park, USA
* Huijing Gong, University of Maryland, College Park, USA
* Léo Ducas, CWI, Amsterdam, The Netherlands
* Mélissa Rossi, ANSSI, Paris, France
* Mélissa Rossi, ENS Paris, CNRS, PSL University, Paris, France
* Mélissa Rossi, Thales, Gennevilliers, France
* Mélissa Rossi, Inria, Paris, France
### Abstract
> We propose a framework for cryptanalysis of lattice-based schemes, when side information—in the form of “hints”—about the secret and/or error is available. Our framework generalizes the so-called primal lattice reduction attack, and allows the progressive integration of hints before running a final lattice reduction step. Our techniques for integrating hints include sparsifying the lattice, projecting onto and intersecting with hyperplanes, and/or altering the distribution of the secret vector. Our main contribution is to propose a toolbox and a methodology to integrate such hints into lattice reduction attacks and to predict the performance of those lattice attacks with side information.
> 
> While initially designed for side-channel information, our framework can also be used in other cases: exploiting decryption failures, or simply exploiting constraints imposed by certain schemes (LAC, Round5, NTRU).
> 
> We implement a Sage 9.0 toolkit to actually mount such attacks with hints when computationally feasible, and to predict their performances on larger instances. We provide several end-to-end application examples, such as an improvement of a single trace attack on Frodo by Bos et al. (SAC 2018). In particular, our work can estimates security loss even given very little side information, leading to a smooth measurement/computation trade-off for side-channel attacks.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-56880-1_12](https://doi.org/10.1007/978-3-030-56880-1_12)
## A Key-Recovery Timing Attack on Post-quantum Primitives Using the Fujisaki-Okamoto Transformation and Its Application on FrodoKEM.
🌍 **[English](../../../docs/en/Crypto/Crypto[2020-2].md#a-key-recovery-timing-attack-on-post-quantum-primitives-using-the-fujisaki-okamoto-transformation-and-its-application-on-frodokem)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2020-2].md#a-key-recovery-timing-attack-on-post-quantum-primitives-using-the-fujisaki-okamoto-transformation-and-its-application-on-frodokem)
### Authors
* Qian Guo, Department of Electrical and Information Technology, Lund University, Lund, Sweden
* Thomas Johansson, Department of Electrical and Information Technology, Lund University, Lund, Sweden
* Alexander Nilsson, Department of Electrical and Information Technology, Lund University, Lund, Sweden
* Qian Guo, Selmer Center, Department of Informatics, University of Bergen, Bergen, Norway
* Alexander Nilsson, Advenica AB, Malmö, Sweden
### Abstract
> In the implementation of post-quantum primitives, it is well known that all computations that handle secret information need to be implemented to run in constant time. Using the Fujisaki-Okamoto transformation or any of its different variants, a CPA-secure primitive can be converted into an IND-CCA secure KEM. In this paper we show that although the transformation does not handle secret information apart from calls to the CPA-secure primitive, it has to be implemented in constant time. Namely, if the ciphertext comparison step in the transformation is leaking side-channel information, we can launch a key-recovery attack.
> 
> Several proposed schemes in round 2 of the NIST post-quantum standardization project are susceptible to the proposed attack and we develop and show the details of the attack on one of them, being FrodoKEM. It is implemented on the reference implementation of FrodoKEM, which is claimed to be secure against all timing attacks. Experiments show that the attack code is able to extract the secret key for all security levels using about \(2^{30}\) decapsulation calls.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-56880-1_13](https://doi.org/10.1007/978-3-030-56880-1_13)
## Efficient Pseudorandom Correlation Generators from Ring-LPN.
🌍 **[English](../../../docs/en/Crypto/Crypto[2020-2].md#efficient-pseudorandom-correlation-generators-from-ring-lpn)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2020-2].md#efficient-pseudorandom-correlation-generators-from-ring-lpn)
### Authors
* Elette Boyle, IDC Herzliya, Herzliya, Israel
* Geoffroy Couteau, IRIF, Paris, France
* Niv Gilboa, Ben-Gurion University of the Negev, Beersheba, Israel
* Yuval Ishai, Technion, Haifa, Israel
* Lisa Kohl, Technion, Haifa, Israel
* Peter Scholl, Aarhus University, Aarhus, Denmark
### Abstract
> Secure multiparty computation can often utilize a trusted source of correlated randomness to achieve better efficiency. A recent line of work, initiated by Boyle et al. (CCS 2018, Crypto 2019), showed how useful forms of correlated randomness can be generated using a cheap, one-time interaction, followed by only “silent” local computation. This is achieved via a pseudorandom correlation generator (PCG), a deterministic function that stretches short correlated seeds into long instances of a target correlation. Previous works constructed concretely efficient PCGs for simple but useful correlations, including random oblivious transfer and vector-OLE, together with efficient protocols to distribute the PCG seed generation. Most of these constructions were based on variants of the Learning Parity with Noise (LPN) assumption. PCGs for other useful correlations had poor asymptotic and concrete efficiency.
> 
> In this work, we design a new class of efficient PCGs based on different flavors of the ring-LPN assumption. Our new PCGs can generate OLE correlations, authenticated multiplication triples, matrix product correlations, and other types of useful correlations over large fields. These PCGs are more efficient by orders of magnitude than the previous constructions and can be used to improve the preprocessing phase of many existing MPC protocols.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-56880-1_14](https://doi.org/10.1007/978-3-030-56880-1_14)
## Scalable Pseudorandom Quantum States.
🌍 **[English](../../../docs/en/Crypto/Crypto[2020-2].md#scalable-pseudorandom-quantum-states)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2020-2].md#scalable-pseudorandom-quantum-states)
### Authors
* Zvika Brakerski, Weizmann Institute of Science, Rehovot, Israel
* Omri Shmueli, Tel-Aviv University, Tel Aviv, Israel
### Abstract
> Efficiently sampling a quantum state that is hard to distinguish from a truly random quantum state is an elementary task in quantum information theory that has both computational and physical uses. This is often referred to as pseudorandom (quantum) state generator, or PRS generator for short.
> 
> In existing constructions of PRS generators, security scales with the number of qubits in the states, i.e. the (statistical) security parameter for an n-qubit PRS is roughly n. Perhaps counter-intuitively, n-qubit PRS are not known to imply k-qubit PRS even for \(k<n\). Therefore the question of scalability for PRS was thus far open: is it possible to construct n-qubit PRS generators with security parameter \(\lambda \) for all \(n, \lambda \). Indeed, we believe that PRS with tiny (even constant) n and large \(\lambda \) can be quite useful.
> 
> We resolve the problem in this work, showing that any quantum-secure one-way function implies scalable PRS. We follow the paradigm of first showing a statistically secure construction when given oracle access to a random function, and then replacing the random function with a quantum-secure (classical) pseudorandom function to achieve computational security. However, our methods deviate significantly from prior works since scalable pseudorandom states require randomizing the amplitudes of the quantum state, and not just the phase as in all prior works. We show how to achieve this using Gaussian sampling.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-56880-1_15](https://doi.org/10.1007/978-3-030-56880-1_15)
## A Non-PCP Approach to Succinct Quantum-Safe Zero-Knowledge.
🌍 **[English](../../../docs/en/Crypto/Crypto[2020-2].md#a-non-pcp-approach-to-succinct-quantum-safe-zero-knowledge)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2020-2].md#a-non-pcp-approach-to-succinct-quantum-safe-zero-knowledge)
### Authors
* Jonathan Bootle, IBM Research – Zurich, Rüschlikon, Switzerland
* Vadim Lyubashevsky, IBM Research – Zurich, Rüschlikon, Switzerland
* Ngoc Khanh Nguyen, IBM Research – Zurich, Rüschlikon, Switzerland
* Gregor Seiler, IBM Research – Zurich, Rüschlikon, Switzerland
* Ngoc Khanh Nguyen, ETH Zurich, Zurich, Switzerland
* Gregor Seiler, ETH Zurich, Zurich, Switzerland
* Jonathan Bootle, UC Berkeley, Berkeley, USA
### Abstract
> Today’s most compact zero-knowledge arguments are based on the hardness of the discrete logarithm problem and related classical assumptions. If one is interested in quantum-safe solutions, then all of the known techniques stem from the PCP-based framework of Kilian (STOC 92) which can be instantiated based on the hardness of any collision-resistant hash function. Both approaches produce asymptotically logarithmic sized arguments but, by exploiting extra algebraic structure, the discrete logarithm arguments are a few orders of magnitude more compact in practice than the generic constructions.
> 
> In this work, we present the first (poly)-logarithmic, potentially post-quantum zero-knowledge arguments that deviate from the PCP approach. At the core of succinct zero-knowledge proofs are succinct commitment schemes (in which the commitment and the opening proof are sub-linear in the message size), and we propose two such constructions based on the hardness of the (Ring)-Short Integer Solution (Ring-SIS) problem, each having certain trade-offs. For commitments to N secret values, the communication complexity of our first scheme is \(\tilde{O}(N^{1/c})\) for any positive integer c, and \(O(\log ^2 N)\) for the second. Both of these are a significant theoretical improvement over the previously best lattice construction by Bootle et al. (CRYPTO 2018) which gave \(O(\sqrt{N})\)-sized proofs.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-56880-1_16](https://doi.org/10.1007/978-3-030-56880-1_16)
## Practical Product Proofs for Lattice Commitments.
🌍 **[English](../../../docs/en/Crypto/Crypto[2020-2].md#practical-product-proofs-for-lattice-commitments)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2020-2].md#practical-product-proofs-for-lattice-commitments)
### Authors
* Thomas Attema, CWI – Amsterdam, Amsterdam, The Netherlands
* Thomas Attema, Leiden University, Leiden, The Netherlands
* Thomas Attema, TNO – The Hague, The Hague, The Netherlands
* Vadim Lyubashevsky, IBM Research – Zurich, Rüschlikon, Switzerland
* Gregor Seiler, IBM Research – Zurich, Rüschlikon, Switzerland
* Gregor Seiler, ETH Zurich, Zurich, Switzerland
### Abstract
> We construct a practical lattice-based zero-knowledge argument for proving multiplicative relations between committed values. The underlying commitment scheme that we use is the currently most efficient one of Baum et al. (SCN 2018), and the size of our multiplicative proof (9 KB) is only slightly larger than the 7 KB required for just proving knowledge of the committed values. We additionally expand on the work of Lyubashevsky and Seiler (Eurocrypt 2018) by showing that the above-mentioned result can also apply when working over rings \(\mathbb {Z}_q[X]/(X^d+1)\) where \(X^d+1\) splits into low-degree factors, which is a desirable property for many applications (e.g. range proofs, multiplications over \(\mathbb {Z}_q\)) that take advantage of packing multiple integers into the NTT coefficients of the committed polynomial.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-56880-1_17](https://doi.org/10.1007/978-3-030-56880-1_17)
## Lattice-Based Blind Signatures, Revisited.
🌍 **[English](../../../docs/en/Crypto/Crypto[2020-2].md#lattice-based-blind-signatures-revisited)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2020-2].md#lattice-based-blind-signatures-revisited)
### Authors
* Eduard Hauck, Ruhr-Universität Bochum, Bochum, Germany
* Eike Kiltz, Ruhr-Universität Bochum, Bochum, Germany
* Julian Loss, University of Maryland, College Park, USA
* Ngoc Khanh Nguyen, ETH Zurich, Zürich, Switzerland
* Ngoc Khanh Nguyen, IBM Research, Zurich, Rüschlikon, Switzerland
### Abstract
> We observe that all previously known lattice-based blind signature schemes contain subtle flaws in their security proofs (e.g., Rückert, ASIACRYPT ’08) or can be attacked (e.g., BLAZE by Alkadri et al., FC ’20). Motivated by this, we revisit the problem of constructing blind signatures from standard lattice assumptions.
> 
> We propose a new three-round lattice-based blind signature scheme whose security can be proved, in the random oracle model, from the standard SIS assumption. Our starting point is a modified version of the (insecure) BLAZE scheme, which itself is based Lyubashevsky’s three-round identification scheme combined with a new aborting technique to reduce the correctness error. Our proof builds upon and extends the recent modular framework for blind signatures of Hauck, Kiltz, and Loss (EUROCRYPT ’19). It also introduces several new techniques to overcome the additional challenges posed by the correctness error which is inherent to all lattice-based constructions.
> 
> While our construction is mostly of theoretical interest, we believe it to be an important stepping stone for future works in this area.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-56880-1_18](https://doi.org/10.1007/978-3-030-56880-1_18)
## Round-Optimal Black-Box Commit-and-Prove with Succinct Communication.
🌍 **[English](../../../docs/en/Crypto/Crypto[2020-2].md#round-optimal-black-box-commit-and-prove-with-succinct-communication)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2020-2].md#round-optimal-black-box-commit-and-prove-with-succinct-communication)
### Authors
* Susumu Kiyoshima, NTT Research, Palo Alto, CA, USA
### Abstract
> We give a four-round black-box construction of a commit-and-prove protocol with succinct communication. Our construction is WI and has constant soundness error, and it can be upgraded into a one that is ZK and has negligible soundness error by relying on a round-preserving transformation of Khurana et al. (TCC 2018). Our construction is obtained by combining the MPC-in-the-head technique of Ishai et al. (SICOMP 2009) with the two-round succinct argument of Kalai et al. (STOC 2014), and the main technical novelty lies in the analysis of the soundness—we show that, although the succinct argument of Kalai et al. does not necessarily provide soundness for \(\mathcal {NP}\) statements, it can be used in the MPC-in-the-head technique for proving the consistency of committed MPC views. Our construction is based on sub-exponentially hard collision-resistant hash functions, two-round PIRs, and two-round OTs.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-56880-1_19](https://doi.org/10.1007/978-3-030-56880-1_19)
## Efficient Constant-Round MPC with Identifiable Abort and Public Verifiability.
🌍 **[English](../../../docs/en/Crypto/Crypto[2020-2].md#efficient-constant-round-mpc-with-identifiable-abort-and-public-verifiability)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2020-2].md#efficient-constant-round-mpc-with-identifiable-abort-and-public-verifiability)
### Authors
* Carsten Baum, Aarhus University, Aarhus, Denmark
* Peter Scholl, Aarhus University, Aarhus, Denmark
* Eduardo Soria-Vazquez, Aarhus University, Aarhus, Denmark
* Emmanuela Orsini, imec-COSIC, KU Leuven, Leuven, Belgium
### Abstract
> Recent years have seen a tremendous growth in the interest in secure multiparty computation (MPC) and its applications. While much progress has been made concerning its efficiency, many current, state-of-the-art protocols are vulnerable to Denial of Service attacks, where a cheating party may prevent the honest parties from learning the output of the computation, whilst remaining anonymous. The security model of identifiable abort aims to prevent these attacks, by allowing honest parties to agree upon the identity of a cheating party, who can then be excluded in the future. Several existing MPC protocols offer security with identifiable abort against a dishonest majority of corrupted parties. However, all of these protocols have a round complexity that scales linearly with the depth of the circuit (and are therefore unsuitable for use in high latency networks) or use cryptographic primitives or techniques that have a high computational overhead.
> 
> In this work, we present the first efficient MPC protocols with identifiable abort in the dishonest majority setting, which run in a constant number of rounds and make only black-box use of cryptographic primitives. Our main construction is built from highly efficient primitives in a careful way to achieve identifiability at a low cost. In particular, we avoid the use of public-key operations outside of a setup phase, incurring a relatively low overhead on top of the fastest currently known constant-round MPC protocols based on garbled circuits. Our construction also avoids the use of adaptively secure primitives and heavy zero-knowledge machinery, which was inherent in previous works. In addition, we show how to upgrade our protocol to achieve public verifiability using a public bulletin board, allowing any external party to verify correctness of the computation or identify a cheating party.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-56880-1_20](https://doi.org/10.1007/978-3-030-56880-1_20)
## Black-Box Use of One-Way Functions is Useless for Optimal Fair Coin-Tossing.
🌍 **[English](../../../docs/en/Crypto/Crypto[2020-2].md#black-box-use-of-one-way-functions-is-useless-for-optimal-fair-coin-tossing)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2020-2].md#black-box-use-of-one-way-functions-is-useless-for-optimal-fair-coin-tossing)
### Authors
* Hemanta K. Maji, Department of Computer Science, Purdue University, West Lafayette, USA
* Mingyuan Wang, Department of Computer Science, Purdue University, West Lafayette, USA
### Abstract
> A two-party fair coin-tossing protocol guarantees output delivery to the honest party even when the other party aborts during the protocol execution. Cleve (STOC–1986) demonstrated that a computationally bounded fail-stop adversary could alter the output distribution of the honest party by (roughly) 1/r (in the statistical distance) in an r-message coin-tossing protocol. An optimal fair coin-tossing protocol ensures that no adversary can alter the output distribution beyond 1/r.
> 
> In a seminal result, Moran, Naor, and Segev (TCC–2009) constructed the first optimal fair coin-tossing protocol using (unfair) oblivious transfer protocols. Whether the existence of oblivious transfer protocols is a necessary hardness of computation assumption for optimal fair coin-tossing remains among the most fundamental open problems in theoretical cryptography. The results of Impagliazzo and Luby (FOCS–1989) and Cleve and Impagliazzo (1993) prove that optimal fair coin-tossing implies the necessity of one-way functions’ existence; a significantly weaker hardness of computation assumption compared to the existence of secure oblivious transfer protocols. However, the sufficiency of the existence of one-way functions is not known.
> 
> Towards this research endeavor, our work proves a black-box separation of optimal fair coin-tossing from the existence of one-way functions. That is, the black-box use of one-way functions cannot enable optimal fair coin-tossing. Following the standard Impagliazzo and Rudich (STOC–1989) approach of proving black-box separations, our work considers any r-message fair coin-tossing protocol in the random oracle model where the parties have unbounded computational power. We demonstrate a fail-stop attack strategy for one of the parties to alter the honest party’s output distribution by \(1/\sqrt{r}\) by making polynomially-many additional queries to the random oracle. As a consequence, our result proves that the r-message coin-tossing protocol of Blum (COMPCON–1982) and Cleve (STOC–1986), which uses one-way functions in a black-box manner, is the best possible protocol because an adversary cannot change the honest party’s output distribution by more than \(1/\sqrt{r}\).
> 
> Several previous works, for example, Dachman–Soled, Lindell, Mahmoody, and Malkin (TCC–2011), Haitner, Omri, and Zarosim (TCC–2013), and Dachman–Soled, Mahmoody, and Malkin (TCC–2014), made partial progress on proving this black-box separation assuming some restrictions on the coin-tossing protocol. Our work diverges significantly from these previous approaches to prove this black-box separation in its full generality. The starting point is the recently introduced potential-based inductive proof techniques for demonstrating large gaps in martingales in the information-theoretic plain model. Our technical contribution lies in identifying a global invariant of communication protocols in the random oracle model that enables the extension of this technique to the random oracle model.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-56880-1_21](https://doi.org/10.1007/978-3-030-56880-1_21)
## Guaranteed Output Delivery Comes Free in Honest Majority MPC.
🌍 **[English](../../../docs/en/Crypto/Crypto[2020-2].md#guaranteed-output-delivery-comes-free-in-honest-majority-mpc)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2020-2].md#guaranteed-output-delivery-comes-free-in-honest-majority-mpc)
### Authors
* Vipul Goyal, Carnegie Mellon University, Pittsburgh, USA
* Yifan Song, Carnegie Mellon University, Pittsburgh, USA
* Chenzhi Zhu, Tsinghua University, Beijing, China
### Abstract
> We study the communication complexity of unconditionally secure MPC with guaranteed output delivery over point-to-point channels for corruption threshold \(t < n/2\), assuming the existence of a public broadcast channel. We ask the question: “is it possible to construct MPC in this setting s.t. the communication complexity per multiplication gate is linear in the number of parties?” While a number of works have focused on reducing the communication complexity in this setting, the answer to the above question has remained elusive until now. We also focus on the concrete communication complexity of evaluating each multiplication gate.
> 
> We resolve the above question in the affirmative by providing an MPC with communication complexity \(O(Cn\phi )\) bits (ignoring fixed terms which are independent of the circuit) where \(\phi \) is the length of an element in the field, C is the size of the (arithmetic) circuit, n is the number of parties. This is the first construction where the asymptotic communication complexity matches the best-known semi-honest protocol. This represents a strict improvement over the previously best-known communication complexity of \(O(C(n\phi \,+\,\kappa )\,+\,D_Mn^2\kappa )\) bits, where \(\kappa \) is the security parameter and \(D_M\) is the multiplicative depth of the circuit. Furthermore, the concrete communication complexity per multiplication gate is 5.5 field elements per party in the best case and 7.5 field elements in the worst case when one or more corrupted parties have been identified. This also roughly matches the best-known semi-honest protocol, which requires 5.5 field elements per gate.
> 
> The above also yields the first secure-with-abort MPC protocol with the same cost per multiplication gate as the best-known semi-honest protocol. Our main result is obtained by compiling the secure-with-abort MPC protocol into a fully secure one.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-56880-1_22](https://doi.org/10.1007/978-3-030-56880-1_22)
## Black-Box Transformations from Passive to Covert Security with Public Verifiability.
🌍 **[English](../../../docs/en/Crypto/Crypto[2020-2].md#black-box-transformations-from-passive-to-covert-security-with-public-verifiability)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2020-2].md#black-box-transformations-from-passive-to-covert-security-with-public-verifiability)
### Authors
* Ivan Damgård, Aarhus University, Aarhus, Denmark
* Claudio Orlandi, Aarhus University, Aarhus, Denmark
* Mark Simkin, Aarhus University, Aarhus, Denmark
### Abstract
> In the context of secure computation, protocols with security against covert adversaries ensure that any misbehavior by malicious parties will be detected by the honest parties with some constant probability. As such, these protocols provide better security guarantees than passively secure protocols and, moreover, are easier to construct than protocols with full security against active adversaries. Protocols that, upon detecting a cheating attempt, allow the honest parties to compute a certificate that enables third parties to verify whether an accused party misbehaved or not are called publicly verifiable.
> 
> In this work, we present the first generic compilers for constructing two-party protocols with covert security and public verifiability from protocols with passive security. We present two separate compilers, which are both fully blackbox in the underlying protocols they use. Both of them only incur a constant multiplicative factor in terms of bandwidth overhead and a constant additive factor in terms of round complexity on top of the passively secure protocols they use.
> 
> The first compiler applies to all two-party protocols that have no private inputs. This class of protocols covers the important class of preprocessing protocols that are used to setup correlated randomness among parties. We use our compiler to obtain the first secret-sharing based two-party protocol with covert security and public verifiability. Notably, the produced protocol achieves public verifiability essentially for free when compared with the best known previous solutions based on secret-sharing that did not provide public verifiability.
> 
> Our second compiler constructs protocols with covert security and public verifiability for arbitrary functionalities from passively secure protocols. It uses our first compiler to perform a setup phase, which is independent of the parties’ inputs as well as the protocol they would like to execute.
> 
> Finally, we show how to extend our techniques to obtain multiparty computation protocols with covert security and public verifiability against arbitrary constant fractions of corruptions.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-56880-1_23](https://doi.org/10.1007/978-3-030-56880-1_23)
## MPC with Friends and Foes.
🌍 **[English](../../../docs/en/Crypto/Crypto[2020-2].md#mpc-with-friends-and-foes)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2020-2].md#mpc-with-friends-and-foes)
### Authors
* Bar Alon, Department of Computer Science, Ariel University, Ariel, Israel
* Eran Omri, Department of Computer Science, Ariel University, Ariel, Israel
* Anat Paskin-Cherniavsky, Department of Computer Science, Ariel University, Ariel, Israel
### Abstract
> Classical definitions for secure multiparty computation assume the existence of a single adversarial entity controlling the set of corrupted parties. Intuitively, the definition requires that the view of the adversary, corrupting t parties, in a real-world execution can be simulated by an adversary in an ideal model, where parties interact only via a trusted-party. No restrictions, however, are imposed on the view of honest parties in the protocol, thus, if honest parties obtain information about the private inputs of other honest parties – it is not counted as a violation of privacy. This is arguably undesirable in many situations that fall into the MPC framework. Nevertheless, there are secure protocols (e.g., the 2-round multiparty protocol of Ishai et al. [CRYPTO 2010] tolerating a single corrupted party) that instruct the honest parties to reveal their private inputs to all other honest parties (once the malicious party is somehow identified).
> 
> In this paper, we put forth a new security notion, which we call FaF-security, extending the classical notion. In essence, \((t,h^*)\)-FaF-security requires the view of a subset of up to \(h^*\) honest parties to also be simulatable in the ideal model (in addition to the view of the malicious adversary, corrupting up to t parties). This property should still hold, even if the adversary leaks information to honest parties by sending them non-prescribed messages. We provide a thorough exploration of the new notion, investigating it in relation to a variety of existing security notions. We further investigate the feasibility of achieving FaF-security and show that every functionality can be computed with (computational) \((t,h^*)\)-FaF full-security, if and only if \(2t+ h^*<m\). Interestingly, the lower-bound result actually shows that even fair FaF-security is impossible in general when \(2t\,+\,h^*\ge m\) (surprisingly, the view of the malicious attacker is not used as the trigger for the attack).
> 
> We also investigate the optimal round complexity for \((t,h^*)\)-FaF-secure protocols and give evidence that the leakage of private inputs of honest parties in the protocol of Ishai et al. [CRYPTO 2010] is inherent.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-56880-1_24](https://doi.org/10.1007/978-3-030-56880-1_24)
## Always Have a Backup Plan: Fully Secure Synchronous MPC with Asynchronous Fallback.
🌍 **[English](../../../docs/en/Crypto/Crypto[2020-2].md#always-have-a-backup-plan-fully-secure-synchronous-mpc-with-asynchronous-fallback)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2020-2].md#always-have-a-backup-plan-fully-secure-synchronous-mpc-with-asynchronous-fallback)
### Authors
* Erica Blum, University of Maryland, College Park, USA
* Julian Loss, University of Maryland, College Park, USA
* Chen-Da Liu-Zhang, ETH Zurich, Zürich, Switzerland
### Abstract
> Protocols for secure Multi-Party Computation (MPC) can be classified according to the underlying communication model. Two prominent communication models considered in the literature are the synchronous and asynchronous models, which considerably differ in terms of the achievable security guarantees. Synchronous MPC protocols can achieve the optimal corruption threshold n/2 and allow every party to give input, but become completely insecure when synchrony assumptions are violated. On the other hand, asynchronous MPC protocols remain secure under arbitrary network conditions, but can tolerate only n/3 corruptions and parties with slow connections unavoidably cannot give input.
> 
> A natural question is whether there exists a protocol for MPC that can tolerate up to \(t_s < n/2\) corruptions under a synchronous network and \(t_a < n/3\) corruptions even when the network is asynchronous. We answer this question by showing tight feasibility and impossibility results. More specifically, we show that such a protocol exists if and only if \(t_a + 2t_s < n\) and the number of inputs taken into account under an asynchronous network is at most \(n-t_s\).

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-56880-1_25](https://doi.org/10.1007/978-3-030-56880-1_25)
## Reverse Firewalls for Actively Secure MPCs.
🌍 **[English](../../../docs/en/Crypto/Crypto[2020-2].md#reverse-firewalls-for-actively-secure-mpcs)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2020-2].md#reverse-firewalls-for-actively-secure-mpcs)
### Authors
* Suvradip Chakraborty, Institute of Science and Technology Austria, Klosterneuburg, Austria
* Stefan Dziembowski, University of Warsaw, Warsaw, Poland
* Jesper Buus Nielsen, Aarhus University, Aarhus, Denmark
### Abstract
> Reverse firewalls were introduced at Eurocrypt 2015 by Miro-nov and Stephens-Davidowitz, as a method for protecting cryptographic protocols against attacks on the devices of the honest parties. In a nutshell: a reverse firewall is placed outside of a device and its goal is to “sanitize” the messages sent by it, in such a way that a malicious device cannot leak its secrets to the outside world. It is typically assumed that the cryptographic devices are attacked in a “functionality-preserving way” (i.e. informally speaking, the functionality of the protocol remains unchanged under this attacks). In their paper, Mironov and Stephens-Davidowitz construct a protocol for passively-secure two-party computations with firewalls, leaving extension of this result to stronger models as an open question.
> 
> In this paper, we address this problem by constructing a protocol for secure computation with firewalls that has two main advantages over the original protocol from Eurocrypt 2015. Firstly, it is a multiparty computation protocol (i.e. it works for an arbitrary number n of the parties, and not just for 2). Secondly, it is secure in much stronger corruption settings, namely in the active corruption model. More precisely: we consider an adversary that can fully corrupt up to \(n-1\) parties, while the remaining parties are corrupt in a functionality-preserving way.
> 
> Our core techniques are: malleable commitments and malleable non-interactive zero-knowledge, which in particular allow us to create a novel protocol for multiparty augmented coin-tossing into the well with reverse firewalls (that is based on a protocol of Lindell from Crypto 2001).

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-56880-1_26](https://doi.org/10.1007/978-3-030-56880-1_26)
## Stacked Garbling - Garbled Circuit Proportional to Longest Execution Path.
🌍 **[English](../../../docs/en/Crypto/Crypto[2020-2].md#stacked-garbling-garbled-circuit-proportional-to-longest-execution-path)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2020-2].md#stacked-garbling-garbled-circuit-proportional-to-longest-execution-path)
### Authors
* David Heath, Georgia Institute of Technology, Atlanta, GA, USA
* Vladimir Kolesnikov, Georgia Institute of Technology, Atlanta, GA, USA
### Abstract
> Secure two party computation (2PC) of arbitrary programs can be efficiently achieved using garbled circuits (GC). The bottleneck of GC efficiency is communication. It is widely believed that it is necessary to transmit the entire GC during 2PC, even for conditional branches that are not taken.
> 
> This folklore belief is false.
> 
> We propose a novel GC technique, stacked garbling, that eliminates the communication cost of inactive conditional branches. We extend the ideas of conditional GC evaluation explored in (Kolesnikov, Asiacrypt 18) and (Heath and Kolesnikov, Eurocrypt 20). Unlike these works, ours is for general 2PC where no player knows which conditional branch is taken.
> 
> Our garbling scheme, \(\textsf {Stack}\), requires communication proportional to the longest execution path rather than to the entire circuit. \(\textsf {Stack}\) is compatible with state-of-the-art techniques, such as free XOR and half-gates.
> 
> \(\textsf {Stack}\) is a garbling scheme. As such, it can be plugged into a variety of existing protocols, and the resulting round complexity is the same as that of standard GC. The approach does incur computation cost quadratic in the conditional branching factor vs linear in standard schemes, but the tradeoff is beneficial for most programs: GC computation even on weak hardware is faster than GC transmission on fast channels.
> 
> We implemented \(\textsf {Stack}\) in C++. \(\textsf {Stack}\) reduces communication cost by approximately the branching factor: for 16 branches, communication is reduced by \(10.5{\times }\). In terms of wall-clock time for circuits with branching factor 16 over a 50 Mbps WAN on a laptop, \(\textsf {Stack}\) outperforms state-of-the-art half-gates-based 2PC by more than \(4{\times }\).

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-56880-1_27](https://doi.org/10.1007/978-3-030-56880-1_27)
## Better Concrete Security for Half-Gates Garbling (in the Multi-instance Setting).
🌍 **[English](../../../docs/en/Crypto/Crypto[2020-2].md#better-concrete-security-for-half-gates-garbling-in-the-multi-instance-setting)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2020-2].md#better-concrete-security-for-half-gates-garbling-in-the-multi-instance-setting)
### Authors
* Chun Guo, Key Laboratory of Cryptologic Technology and Information Security of Ministry of Education, Shandong University, Qingdao, 266237, Shandong, China
* Chun Guo, School of Cyber Science and Technology, Shandong University, Qingdao, China
* Jonathan Katz, George Mason University, Fairfax, USA
* Xiao Wang, Northwestern University, Evanston, USA
* Chenkai Weng, Northwestern University, Evanston, USA
* Yu Yu, Shanghai Jiao Tong University, Shanghai, China
* Yu Yu, Shanghai Qi Zhi Institute, Shanghai, China
### Abstract
> We study the concrete security of high-performance implementations of half-gates garbling, which all rely on (hardware-accelerated) AES. We find that current instantiations using k-bit wire labels can be completely broken—in the sense that the circuit evaluator learns all the inputs of the circuit garbler—in time \(O(2^k/C)\), where C is the total number of (non-free) gates that are garbled, possibly across multiple independent executions. The attack can be applied to existing circuit-garbling libraries using \(k=80\) when \(C \approx 10^9\), and would require \(267\) machine-months and cost about $\(3500\) to implement on the Google Cloud Platform. Since the attack can be fully parallelized, it could be carried out in about a month using \({\approx }250\) machines.
> 
> With this as our motivation, we seek a way to instantiate the hash function in the half-gates scheme so as to achieve better concrete security. We present a construction based on AES that achieves optimal security in the single-instance setting (when only a single circuit is garbled). We also show how to modify the half-gates scheme so that its concrete security does not degrade in the multi-instance setting. Our modified scheme is as efficient as prior work in networks with up to 2 Gbps bandwidth.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-56880-1_28](https://doi.org/10.1007/978-3-030-56880-1_28)
## Improved Primitives for MPC over Mixed Arithmetic-Binary Circuits.
🌍 **[English](../../../docs/en/Crypto/Crypto[2020-2].md#improved-primitives-for-mpc-over-mixed-arithmetic-binary-circuits)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2020-2].md#improved-primitives-for-mpc-over-mixed-arithmetic-binary-circuits)
### Authors
* Daniel Escudero, Aarhus University, Aarhus, Denmark
* Satrajit Ghosh, Aarhus University, Aarhus, Denmark
* Rahul Rachuri, Aarhus University, Aarhus, Denmark
* Peter Scholl, Aarhus University, Aarhus, Denmark
* Marcel Keller, CSIRO’s Data61, Sydney, Australia
### Abstract
> This work introduces novel techniques to improve the translation between arithmetic and binary data types in secure multi-party computation. We introduce a new approach to performing these conversions using what we call extended doubly-authenticated bits (edaBits), which correspond to shared integers in the arithmetic domain whose bit decomposition is shared in the binary domain. These can be used to considerably increase the efficiency of non-linear operations such as truncation, secure comparison and bit-decomposition.
> 
> Our edaBits are similar to the daBits technique introduced by Rotaru et al. (Indocrypt 2019). However, we show that edaBits can be directly produced much more efficiently than daBits, with active security, while enabling the same benefits in higher-level applications. Our method for generating edaBits involves a novel cut-and-choose technique that may be of independent interest, and improves efficiency by exploiting natural, tamper-resilient properties of binary circuits that occur in our construction. We also show how edaBits can be applied to efficiently implement various non-linear protocols of interest, and we thoroughly analyze their correctness for both signed and unsigned integers.
> 
> The results of this work can be applied to any corruption threshold, although they seem best suited to dishonest majority protocols such as SPDZ. We implement and benchmark our constructions, and experimentally verify that our technique yields a substantial increase in efficiency. EdaBits save in communication by a factor that lies between 2 and 60 for secure comparisons with respect to a purely arithmetic approach, and between 2 and 25 with respect to using daBits. Improvements in throughput per second slightly lower but still as high as a factor of 47. We also apply our novel machinery to the tasks of biometric matching and convolutional neural networks, obtaining a noticeable improvement as well.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-56880-1_29](https://doi.org/10.1007/978-3-030-56880-1_29)
